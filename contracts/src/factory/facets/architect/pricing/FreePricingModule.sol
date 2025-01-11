pragma solidity ^0.8.23;

// interfaces
import {IMembershipPricing} from "contracts/src/spaces/facets/membership/pricing/IMembershipPricing.sol";

// contracts
import {Facet} from "@river-build/diamond/src/facets/Facet.sol";

contract FreePricingModule is IMembershipPricing, Facet {
    function __FreePricingModule_init() external onlyInitializing {
        __FreePricingModule_init_unchained();
    }

    function __FreePricingModule_init_unchained() internal {
        _addInterface(type(IMembershipPricing).interfaceId);
    }

    function name() external pure returns (string memory) {
        return "Free Pricing Module";
    }

    function description() external pure returns (string memory) {
        return "This module always returns a price of 0";
    }

    function getPrice() external pure returns (uint256) {
        return 0;
    }
}
