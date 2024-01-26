// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.21;

import "@butternetwork/bridge/contracts/interface/IButterMosV2.sol";
import "../interface/IButterRouterV2.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract MosMock is IButterMosV2 {
    event SwapOut(
        uint256 indexed fromChain, // from chain
        uint256 indexed toChain, // to chain
        bytes32 orderId, // order id
        bytes token, // token to transfer
        bytes from, // source chain from address
        bytes to,
        uint256 amount,
        bytes swapData // swap data, used on target chain dex.
    );

    function swapOutToken(
        address _initiatorAddress,
        address _token, // src token
        bytes memory _to,
        uint256 _amount,
        uint256 _toChain, // target chain id
        bytes calldata swapData
    ) external returns (bytes32 orderId) {
        emit SwapOut(
            block.chainid,
            _toChain,
            bytes32(0),
            abi.encodePacked(_token),
            abi.encodePacked(_initiatorAddress),
            _to,
            _amount,
            swapData
        );
        return bytes32(0);
    }

    function swapOutNative(
        address _initiatorAddress,
        bytes memory _to,
        uint256 _toChain, // target chain id
        bytes calldata swapData
    ) external payable returns (bytes32 orderId) {
        emit SwapOut(
            block.chainid,
            _toChain,
            bytes32(0),
            abi.encodePacked(address(0)),
            abi.encodePacked(_initiatorAddress),
            _to,
            msg.value,
            swapData
        );
        return bytes32(0);
    }

    function depositToken(address _token, address to, uint256 _amount) external {
        emit mapDepositOut(block.chainid, 212, bytes32(0), _token, bytes("0"), to, _amount);
    }

    function depositNative(address _to) external payable {
        emit mapDepositOut(block.chainid, 212, bytes32(0), address(0x00), bytes("0"), _to, msg.value);
    }

    function mockRemoteSwapAndCall(
        address _router,
        address _srcToken,
        uint256 _amount,
        bytes calldata _swapData
    ) external payable {
        if (_srcToken == address(0)) {
            require(msg.value == _amount);
        } else {
            SafeERC20.safeTransferFrom(IERC20(_srcToken), msg.sender, _router, _amount);
        }

        IButterRouterV2(_router).onReceived{value: msg.value}(
            bytes32(0),
            _srcToken,
            _amount,
            0x01,
            bytes(""),
            _swapData
        );
    }
}
