pragma solidity ^0.8.23;

// interfaces
import {IPricingModules} from "./IPricingModules.sol";

// contracts
import {Facet} from "@river-build/diamond/src/facets/Facet.sol";

contract FreePricingModule is IPricingModules, Facet {
    address[] private pricingModules;

    function __FreePricingModule_init() external onlyInitializing {
        __FreePricingModule_init_unchained();
    }

    function __FreePricingModule_init_unchained() internal {
        _addInterface(type(IPricingModules).interfaceId);
    }

    function isPricingModule(address) external pure returns (bool) {
        return true;
    }

    function addPricingModule(address module) external {
        pricingModules.push(module);
    }

    function removePricingModule(address module) external {
        for (uint256 i = 0; i < pricingModules.length; i++) {
            if (pricingModules[i] == module) {
                pricingModules[i] = pricingModules[pricingModules.length - 1];
                pricingModules.pop();
                break;
            }
        }
    }

    function listPricingModules() external view returns (PricingModule[] memory) {
        PricingModule[] memory modules = new PricingModule[](pricingModules.length);
        for (uint256 i = 0; i < pricingModules.length; i++) {
            modules[i] = PricingModule({
                name: "Free Module",
                description: "This module is always free",
                module: pricingModules[i]
            });
        }
        return modules;
    }

    function getPrice() external pure returns (uint256) {
        return 0;
    }
}
