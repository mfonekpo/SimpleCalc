// SPDX-License-Identifier: MIT

pragma solidity = 0.8.17;

contract Calc {
    int public counter = 0;

    function increase() external {
        int tempCount = counter;
        tempCount += 1;
        counter = tempCount;
    }

    function reset() external {
        int tempCount = counter;
        tempCount = 0;
        counter = tempCount;
    }

    function decrease() external {
        int tempCount = counter;
        tempCount -= 1;
        counter = tempCount;
    }
}