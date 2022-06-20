---
id: slt-loan
title: SLT (Single Lender Token) Loans
sidebar_position: 1
---

# SLT (Single Lender Token) Loans v0.1

```text title="Development Status"
IsImplemented: false
CurrentStatus: Implementing
Documentation: Partially Documented
```

:::note

This article is used as a roadmap for developers as a form of clarity and understanding for the future developers.

:::

SLT is short for Single Lender Token. SLT allows loans to be taken out with a token as the currency. This token can be of as any token. However, for the first version, the only token that is loan-able is SigUSD.

The reason for this implementation is due to the stability of a token pegged to the USD. As the world cannot predict the prices of cryptocurrency or Ergo, having a token that is stable to loan will benefit both borrowers and lenders at this moment of time.

In this article, we will discuss about the implementation that will be implemented for SLT v0.1 to be completed and open to the public to be used.

## Components

| Components | Description | Status | Authored By |
| -------- | --------- | ------ | ------ |
| 1. Exle-Generics | Exle-Generics is a module and building tool that will help with designing and utilizing boxes from the blockchain. The goal of this module is to provide building blocks, Box, Registers, Box Wrappers, Register Wrappers, Generic Txs and Txs Wrappers. | In Progress | Cheese & Kii |
| 2. SLT-Components | SLT-Components are components that are built in the Single-Lender module. It takes the design for SLT boxes and transactions and implements it on top of the Generics modules. This allows the ease of usage throughout the app. Especially for tests and ExleTxBot. | Blocked on Generics | Kii |
| 3. [SLT Tx Flow](./slt-tx-flow.md) | Flow and path of the main transactions so that it can be easily understood. | Documentation Needed | Kii|
| 4. SLT Box Design | In Exle, we utilize a highly draft-y method to record the design of the boxes. This pens down every part of the boxes which includes, the values, tokens, registers, and contract conditions | 1st Draft Completed | Kii |
| 5. SLT Contracts | The guard script for each boxes in the SLT that determines whether the box can be spent or not. | 1st Draft Completed | Kii |
| 6. SLT Proxy Payments | Generation of the proxy contracts for payments and fundings within the SLT protocol. This will be connected to the payment and the APIs | Completed | Kii |
| 7. SLT Explorer | This is the gate between the Ergo Blockchain and the dApp. Explorer that is built mainly for the SLT features. This component focuses on retrieving SLT Input Boxes and transactions from the blockchain. | In Progress | lgd |
| 8. SLT API Routes | This is the gateway between the client and the dApp. API routes can be called by the client to create proxy contract requests | In Progress | lgd |
| 9. [SLT Tx Bot](#slttxbot) | Bots are heavily used within the Ergo System to process transactions and carry the boxes towards the next stages of the transaction flow. This Tx Bot will process SLT transactions that are ready to move towards the next stage. | Blocked on SLT-Components | Not Assigned |
| 10. SLT Tests | This is the most important step to ensure the financial security of the protocol. Tests will be run heavily to ensure each tx flow works the way it should. This will also include tests for hacker scenarios to ensure that our protocol has the highest security. | Blocked by SLT-Components & Generics | Not Assigned |

## SLT Tx Bot {#slttxbot}
The SLT Tx Bot is in charged of processing txs to move towards the next step of the process. These steps will include:

1. Creation Proxy Contract -> Loan Box Tx
2. Fund Loan Success -> Repayment Box Tx
3. Repayment Tx -> Return to Lender Tx
4. Repayment Repaid Tx -> Absorb Token Tx

:::note

Other than completing the project, our goal is to ensure that the programme is highly secure. Our project will involve a huge amount of test written for the contracts to ensure that the protocol is safe and secure.

:::
