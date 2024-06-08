// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@opengsn/contracts/src/BaseRelayRecipient.sol";

contract Voting is BaseRelayRecipient {
    address public owner;
    string public override versionRecipient = "1.0.0";

    struct Candidate {
        string name;
        uint256 voteCount;
    }

    Candidate[] public candidates;
    mapping(address => bool) public hasVoted;

    event Voted(address voter, uint256 candidateIndex);

    constructor(string[] memory candidateNames, address _trustedForwarder, address _owner) {
        owner = _owner;
        _setTrustedForwarder(_trustedForwarder);

        for (uint256 i = 0; i < candidateNames.length; i++) {
            candidates.push(Candidate({
                name: candidateNames[i],
                voteCount: 0
            }));
        }
    }

    function vote(uint256 candidateIndex) public {
        require(!hasVoted[_msgSender()], "Already voted.");
        require(candidateIndex < candidates.length, "Invalid candidate index.");

        candidates[candidateIndex].voteCount += 1;
        hasVoted[_msgSender()] = true;

        emit Voted(_msgSender(), candidateIndex);
    }

    function getCandidates() public view returns (Candidate[] memory) {
        return candidates;
    }

    function _msgSender() internal view override(BaseRelayRecipient) returns (address ret) {
        return BaseRelayRecipient._msgSender();
    }

    function _msgData() internal view override(BaseRelayRecipient) returns (bytes calldata ret) {
        return BaseRelayRecipient._msgData();
    }
}
