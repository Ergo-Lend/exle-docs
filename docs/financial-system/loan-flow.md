---
id: loan-flow
title: Loan Flow
sidebar_position: 1
---

# Loan Flow

To be able to design the system, we would have to understand the intricacies of the loan flow. This part can get complicated really fast. Therefore, having a well-defined flow will ease the process of understanding and improve the experience of development through the evaporation of confusion of the system.

The first thing we want to take a look is the
## Scenarios
Assuming that there are 2 parties in this scenario, Bob the borrower, and Lenny the Lender.

A lending scenario will look like this:

1. Bob **makes** a request to borrow 1000 SigUSD with a 10% interest over 10 months.
2. Lenny **fulfills** the Bob's request and borrows him 1000 SigUSD
3. Bob now owes Lenny 1100 SigUSD across 10 months.
4. Once a month, Bob **repays** 110 SigUSD to Lenny. Where 108 SigUSD goes to Lenny, and 2 SigUSD goes to the accountant.
5. Step 4 is repeated 10 times over 10 months.
6. The loan is fully paid off, and the loan history is **stored** as records.

For each of this stage, we would require specific details for parties to efficiently evaluate the loan. These are some details.

## Infos for Evaluation

### Making a Loan (Step 1)
In this stage, Bob is making the loan, and Lenny the lender would like to know the details of the loan to efficiently evaluate whether it would be of interest to him to borrow the funds to Bob.

Based on a few loan proposals, these are some of the details that would be useful.

1. Loan Name - a Summary/quick detail of the loan
2. Loan Description - a description of what the purpose of the loan is for
3. Loan Amount - the total amount requested for the loan
4. Interest Rate - the percent amount of the total loan that will be repaid on top of the capital
5. Length of Payment - the length of time required to pay back the loan
6. Frequency of Payment - How frequent would this payment be paid. This value is usually monthly.
7. Type of Currency - what currency is the borrower requesting to borrow

In this case, we can sum up Bob's loan in the table below, followed by the data type.

| Name | Description | Borrower | Amount | InterestRate | Length of Payment | Frequency | Currency |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Bob's Loan | Test Loan | Bob | 1000 | 10% | 10 Months | 10 | SigUSD |
| String | String | String | Long | Long | Long | Long | String |

### 2. Fulfilling a loan (Step 2)
When fulfilling a loan, the lender will look at the loan details from when a loan is created and make his decision on whether to fund it. And after he decided to fund, we have to store the data for who was the one who loan to him

| Lender |
| ----- |
| Lenny |
| String |

### Repaying a loan (Step 4)
The repayment of loan can be confusing if not planned out properly. This section gives an idea of how the numbers from the scenarios are calculated. The data will be tabulated for ease of processing.

First off, we would need to get a few numbers in.

1. Amount Paid - The amount being paid
2. Interest Rate - how much percent interest to be paid on top of capital
3. Profit Sharing Rate - how much percent of the interest are we returning to the protocol owner

With the variables above, we can calculate:
1. Lender's share - the share that the lender receives
2. Protocol Owner share - the share that the protocol owner receives

| Amount Paid | Interest Rate | Profit Sharing Rate |
| ---- | ---- | ---- |
| 110 SigUSD | 10% | 20% |

a. Calculate capital: 
```
Repayment = Capital + Interest
Interest = Capital * Interest Rate

// Equation derivation
Repayment = Capital + (Capital * Interest Rate)
Repayment = Capital * (1 + 10%)
Repayment = Capital * (1 + 10/100)
Repayment = Capital * (110/100)

// Capital calculation
110 SigUSD = Capital * (110/100)
Capital = 110 SigUSD * (100/110)
Capital = 100 SigUSD

// Interest calculation
Repayment = Capital + Interest
Interest = Repayment - Capital
Interest = 110 SigUSD - 100 SigUSD
Interest = 10 SigUSD

// Profit Sharing calculation
Profit Sharing Amount = Interest * Profit Sharing Rate
Profit Sharing Amount = 10 SigUSD * 20%
Profit Sharing Amount = 2 SigUSD
```

To summarize the numbers:

| Amount Paid | Capital | Interest | Profit Sharing |
| ---- | ---- | ---- | ---- |
| 110 SigUSD | 100 SigUSD | 10 SigUSD | 2 SigUSD |

The equations that are important from the calculation are these:
1. Repayment = Capital * (1 + Interest Rate)
2. Interest = Repayment - Capital
3. Profit Sharing Amount = Interest * Profit Sharing Rate

#### Caveat

There's a catch in this. After repaying, **we have to record** what is the amount that has been repaid so that we can keep track of the repayment.

This is to ensure that borrowers do not overpay, and also, that the system can keep track of this automatically.

Month 1: 

| Amount Repaid |
| ---- |
| 110 SigUSD |

Month 2:

| Amount Repaid |
| ---- |
| 220 SigUSD |

**In lieu of Box Designs:**
We have to decide where these numbers will be stored. Or at least, whether they will be in the same box.

In the case of Profit Sharing Rate. This is something that is universal to all loan boxes, therefore it will be stored in what our system calls a **Service Box**.

Whereas the rest will be stored in the **Loan Box** itself.

### Repaid (Step 6)
Lastly, when everything is repaid, we store the records and move on to the next loan.
