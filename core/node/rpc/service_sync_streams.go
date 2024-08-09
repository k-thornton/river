package rpc

import (
	"context"
	"runtime/pprof"
	"time"

	"connectrpc.com/connect"

	. "github.com/river-build/river/core/node/base"
	. "github.com/river-build/river/core/node/protocol"
	"github.com/river-build/river/core/node/utils"
)

func runWithLabels(
	ctx context.Context,
	syncId string,
	f func(context.Context),
) {
	pprof.Do(
		ctx,
		pprof.Labels("SYNC_ID", syncId, "START_TIME", time.Now().UTC().Format(time.RFC3339)),
		f,
	)
}

func (s *Service) SyncStreams(
	ctx context.Context,
	req *connect.Request[SyncStreamsRequest],
	res *connect.ServerStream[SyncStreamsResponse],
) error {
	ctx, log := utils.CtxAndLogForRequest(ctx, req)
	startTime := time.Now()
	syncId := GenNanoid()
	log.Info("SyncStreams START", "syncId", syncId)

	var err error
	runWithLabels(ctx, syncId, func(ctx context.Context) {
		err = s.syncHandler.SyncStreams(ctx, syncId, req, res)
	})
	if err != nil {
		err = AsRiverError(
			err,
		).Func("SyncStreams").
			Tags("syncId", syncId, "duration", time.Since(startTime)).
			LogWarn(log).
			AsConnectError()
	} else {
		log.Info("SyncStreams DONE", "syncId", syncId, "duration", time.Since(startTime))
	}
	return err
}

func (s *Service) AddStreamToSync(
	ctx context.Context,
	req *connect.Request[AddStreamToSyncRequest],
) (*connect.Response[AddStreamToSyncResponse], error) {
	ctx, log := utils.CtxAndLogForRequest(ctx, req)
	var res *connect.Response[AddStreamToSyncResponse]
	var err error
	runWithLabels(ctx, req.Msg.GetSyncId(), func(ctx context.Context) {
		res, err = s.syncHandler.AddStreamToSync(ctx, req)
	})
	if err != nil {
		err = AsRiverError(
			err,
		).Func("AddStreamToSync").
			Tags("syncId", req.Msg.GetSyncId(), "streamId", req.Msg.GetSyncPos().GetStreamId()).
			LogWarn(log).
			AsConnectError()
	}
	return res, err
}

func (s *Service) RemoveStreamFromSync(
	ctx context.Context,
	req *connect.Request[RemoveStreamFromSyncRequest],
) (*connect.Response[RemoveStreamFromSyncResponse], error) {
	ctx, log := utils.CtxAndLogForRequest(ctx, req)
	var res *connect.Response[RemoveStreamFromSyncResponse]
	var err error
	runWithLabels(ctx, req.Msg.GetSyncId(), func(ctx context.Context) {
		res, err = s.syncHandler.RemoveStreamFromSync(ctx, req)
	})
	if err != nil {
		err = AsRiverError(
			err,
		).Func("RemoveStreamFromSync").
			Tags("syncId", req.Msg.GetSyncId(), "streamId", req.Msg.GetStreamId()).
			LogWarn(log).
			AsConnectError()
	}
	return res, err
}

func (s *Service) CancelSync(
	ctx context.Context,
	req *connect.Request[CancelSyncRequest],
) (*connect.Response[CancelSyncResponse], error) {
	ctx, log := utils.CtxAndLogForRequest(ctx, req)
	var res *connect.Response[CancelSyncResponse]
	var err error
	runWithLabels(ctx, req.Msg.GetSyncId(), func(ctx context.Context) {
		res, err = s.syncHandler.CancelSync(ctx, req)
	})
	if err != nil {
		err = AsRiverError(
			err,
		).Func("CancelSync").
			Tags("syncId", req.Msg.GetSyncId()).
			LogWarn(log).
			AsConnectError()
	}
	return res, err
}

func (s *Service) PingSync(
	ctx context.Context,
	req *connect.Request[PingSyncRequest],
) (*connect.Response[PingSyncResponse], error) {
	ctx, log := utils.CtxAndLogForRequest(ctx, req)
	var res *connect.Response[PingSyncResponse]
	var err error
	runWithLabels(ctx, req.Msg.GetSyncId(), func(ctx context.Context) {
		res, err = s.syncHandler.PingSync(ctx, req)
	})
	if err != nil {
		err = AsRiverError(
			err,
		).Func("PingSync").
			Tags("syncId", req.Msg.GetSyncId()).
			LogWarn(log).
			AsConnectError()
	}
	return res, err
}
