---
id: slt-loan-tx-flow
title: SLT Tx Flow
sidebar_position: 2
---

# SLT Tx Flow

This document describes the Tx flow for the SLT (Single Lender Token) implementation.

To start off, these are the list of flow:

1. SLT Loan Creation
2. SLT Loan Funding
3. SLT Loan Funded to Repayment
4. SLT Repayment Funding
5. SLT Repayment Payment to Lender
6. SLT Repayment Funded and Absorption
7. SLT Loan Cancellation/Absorption

--------------------------

### SLT Loan Creation {#sltloancreation}

```
Input Boxes                         Output Boxes
----------------------------------------------------------
1. SLT Service Box                  1. SLT Service Box
2. Creation Proxy Contract          2. SLT Loan Box
                                    3. Exle Service Fee
```

### SLT Loan Funding {#sltloanfunding}
```
Input Boxes                         Output Boxes
----------------------------------------------------------
1. SLT Loan Box                     1. SLT Loan Box
2. Fund Loan Proxy Contract         
```

### SLT Loan Funded to Repayment {#sltloandunded}
```
Input Boxes                         Output Boxes
----------------------------------------------------------
1. SLT Service Box                  1. SLT Service Box
2. SLT Loan Box                     2. SLT Repayment Box
                                    3. Funds to Borrower
```

### SLT Repayment Funding {#sltrepaymentfunding}
```
Input Boxes                         Output Boxes
----------------------------------------------------------
1. SLT Repayment Box                1. SLT Repayment Box
2. Fund Repayment Proxy Contract         
```

### SLT Repayment Payment to Lender {#sltrepaymenttolender}
```
Input Boxes                         Output Boxes
----------------------------------------------------------
1. SLT Repayment Box                1. SLT Repayment Box
2. Lender Extract Fee               2. Repayment to Lender
                                    3. Exle Profit Sharing
```

### SLT Repayment Funded and Absorption {#sltrepaymentabsorption}
When there is one last repayment left, we absorb the repayment box, repay the lender and distribute exle's profit sharing.
```
Input Boxes                         Output Boxes
----------------------------------------------------------
1. SLT Service Box                  1. SLT Service Box
2. SLT Repayment Box                2. Repayment to Lender
                                    3. Exle Profit Sharing
```

### SLT Loan Cancellation/Absorption {#sltloancancellation}
If the loan box is never funded and its past the funding deadline.
```
Input Boxes                         Output Boxes
----------------------------------------------------------
1. SLT Service Box                  1. SLT Service Box
2. SLT Loan Box
```