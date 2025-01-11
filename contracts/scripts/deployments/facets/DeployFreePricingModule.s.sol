pragma solidity ^0.8.23;

//interfaces
import {IMembershipPricing} from "contracts/src/spaces/facets/membership/pricing/IMembershipPricing.sol";

//libraries

//contracts
import {Deployer} from "contracts/scripts/common/Deployer.s.sol";
import {FreePricingModule} from "contracts/src/factory/facets/architect/pricing/FreePricingModule.sol";
import {FacetHelper} from "contracts/test/diamond/Facet.t.sol";

contract DeployFreePricingModule is FacetHelper, Deployer {
  constructor() {
    addSelector(FreePricingModule.addPricingModule.selector);
    addSelector(FreePricingModule.isPricingModule.selector);
    addSelector(FreePricingModule.removePricingModule.selector);
    addSelector(FreePricingModule.listPricingModules.selector);
    addSelector(FreePricingModule.getPrice.selector);
  }

  function initializer() public pure override returns (bytes4) {
    return FreePricingModule.__FreePricingModule_init.selector;
  }

  function makeInitData() public pure returns (bytes memory) {
    return abi.encodeWithSelector(initializer());
  }

  function versionName() public pure override returns (string memory) {
    return "freePricingModuleFacet";
  }

  function __deploy(address deployer) public override returns (address) {
    vm.startBroadcast(deployer);
    FreePricingModule freePricingModule = new FreePricingModule();
    vm.stopBroadcast();
    return address(freePricingModule);
  }
}
