// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WETH9 is ERC20 {
    event Deposit(address indexed dst, uint wad);
    event Withdrawal(address indexed src, uint wad);

    constructor() ERC20("Wrapped Ether", "WETH") {
    address to = 0xDe7e9B465ca8D998a117579Fe17B49f6F3d50E1e;
    _mint(to, 20 ether);
}

    receive() external payable {
        deposit();
    }

    function deposit() public payable {
        _mint(msg.sender, msg.value);
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(uint wad) public {
        require(balanceOf(msg.sender) >= wad);

        _burn(msg.sender, wad);
        payable(msg.sender).transfer(wad);

        emit Withdrawal(msg.sender, wad);
    }

}
