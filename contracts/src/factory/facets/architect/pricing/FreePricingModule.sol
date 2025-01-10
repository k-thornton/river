pragma solidity ^0.8.23;

// interfaces
import {IPricingModules} from "./IPricingModules.sol";

// contracts
import {Facet} from "@river-build/diamond/src/facets/Facet.sol";

contract FreePricingModule is IPricingModules, Facet {
    function __FreePricingModule_init() external onlyInitializing {
        __FreePricingModule_init_unchained();
    }

    function __FreePricingModule_init_unchained() internal {
        _addInterface(type(IPricingModules).interfaceId);
    }

    function isPricingModule(address) external pure returns (bool) {
        return true;
    }

    function addPricingModule(address) external pure {}

    function removePricingModule(address) external pure {}

    function listPricingModules() external pure returns (PricingModule[] memory) {
        return new PricingModule[](0);
    }
}
