package storage

import (
	"testing"

	. "github.com/river-build/river/core/node/base"
	"github.com/river-build/river/core/node/infra"

	"github.com/stretchr/testify/require"
)

func TestMigrateExistingDb(t *testing.T) {
	require := require.New(t)

	testParams := setupStreamStorageTest(t)
	ctx := testParams.ctx

	// Tear down the store and defer remaining cleanup
	testParams.pgStreamStore.Close(ctx)
	defer testParams.ctxCloser()
	defer testParams.schemaDeleter()

	pool, err := CreateAndValidatePgxPool(
		ctx,
		testParams.config,
		testParams.schema,
		nil,
	)
	require.NoError(err)

	instanceId2 := GenShortNanoid()
	exitSignal2 := make(chan error, 1)
	pgStreamStore2, err := NewPostgresStreamStore(
		ctx,
		pool,
		instanceId2,
		exitSignal2,
		infra.NewMetricsFactory(nil, "", ""),
	)
	require.NoError(err)
	defer pgStreamStore2.Close(ctx)
}
