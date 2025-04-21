import { useReducer, useState } from "react";

/*
INSTRUCTIONS / CONSIDERATIONS:

1. Let's implement a simple bank account! It's similar to the example that I used as an analogy to explain how useReducer works, but it's simplified (we're not using account numbers here)

2. Use a reducer to model the following state transitions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount. Use the `initialState` below to get started.

3. All operations (expect for opening account) can only be performed if isActive is true. If it's not, just return the original state object. You can check this right at the beginning of the reducer

4. When the account is opened, isActive is set to true. There is also a minimum deposit amount of 500 to open an account (which means that the balance will start at 500)

5. Customer can only request a loan if there is no loan yet. If that condition is met, the requested amount will be registered in the 'loan' state, and it will be added to the balance. If the condition is not met, just return the current state

6. When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point)

7. Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state
*/

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  amount: 0,
};

function reducer(state, action) {
  // Prevent actions except opening account if account is not active
  if (!state.isActive && action.type !== "openAccount") return state;

  switch (action.type) {
    case "openAccount": {
      // Open account with initial balance
      return {
        ...state,
        balance: 500,
        isActive: true,
      };
    }
    case "setAmount": {
      return {
        ...state,
        amount: action.payload,
      };
    }
    case "deposit": {
      // Deposit funds
      return {
        ...state,
        balance: state.balance + action.payload,
        amount: 0,
      };
    }
    case "withdraw": {
      // Withdraw funds
      return {
        ...state,
        balance: state.balance - action.payload,
        amount: 0,
      };
    }
    case "requestLoan": {
      // Only allow loan if there is no outstanding loan
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload,
        loan: action.payload,
        amount: 0,
      };
    }
    case "payLoan": {
      // Only pay loan if there is an outstanding loan
      if (state.loan === 0) return state;
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        amount: 0,
      };
    }
    case "closeAccount": {
      // Only close account if balance and loan are zero
      if (state.balance !== 0 || state.loan > 0) {
        alert(
          "You must pay off your loan and withdraw all your balance before closing the account"
        );
        return state;
      }
      return { ...initialState };
    }
    default:
      throw new Error("Unknown action type");
  }
}

// Reusable Button component
const baseButtonClasses =
  "py-2 px-4 rounded text-white font-semibold cursor-pointer disabled:bg-gray-300 disabled:text-gray-400 transition";

function ActionButton({ onClick, disabled, className, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseButtonClasses} ${className}`}
    >
      {children}
    </button>
  );
}

function ActionInput({
  value,
  onChange,
  onAction,
  actionLabel,
  actionClass,
  placeholder = "Enter amount",
  disabled = false,
}) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="w-1/2 px-2 py-2 border rounded-md"
        placeholder={placeholder}
        disabled={disabled}
      />
      <ActionButton
        onClick={onAction}
        disabled={disabled}
        className={`w-1/2 ${actionClass}`}
      >
        {actionLabel}
      </ActionButton>
    </div>
  );
}

function BankApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { balance, loan, isActive, amount } = state;
  const [showCustom, setShowCustom] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="w-full max-w-md px-8 py-10 bg-white shadow-lg rounded-2xl">
        <h1 className="mb-6 text-3xl font-bold text-center text-blue-700">
          Bank Account
        </h1>
        <div className="flex flex-col gap-2 mb-6">
          <p className="text-lg font-medium text-gray-700">
            Balance: <span className="font-mono text-blue-600">{balance}</span>
          </p>
          <p className="text-lg font-medium text-gray-700">
            Loan: <span className="font-mono text-red-500">{loan}</span>
          </p>
        </div>
        <div className="flex justify-end mb-4">
          <ActionButton
            onClick={() => setShowCustom((v) => !v)}
            className="outline outline-blue-500 !text-blue-500 hover:bg-blue-500 hover:!text-white transition"
          >
            {showCustom ? "Show Fixed Actions" : "Show Custom Inputs"}
          </ActionButton>
        </div>
        <div className="flex flex-col gap-3">
          <ActionButton
            onClick={() => dispatch({ type: "openAccount" })}
            disabled={isActive}
            className="bg-green-500 hover:bg-green-600"
          >
            Open account
          </ActionButton>
          {!showCustom ? (
            <>
              <ActionButton
                onClick={() => dispatch({ type: "deposit", payload: 150 })}
                disabled={!isActive}
                className="bg-blue-500 hover:bg-blue-600"
              >
                Deposit 150
              </ActionButton>
              <ActionButton
                onClick={() => dispatch({ type: "withdraw", payload: 50 })}
                disabled={!isActive}
                className="bg-yellow-500 hover:bg-yellow-600"
              >
                Withdraw 50
              </ActionButton>
              <ActionButton
                onClick={() => dispatch({ type: "requestLoan", payload: 5000 })}
                disabled={!isActive}
                className="bg-purple-500 hover:bg-purple-600"
              >
                Request a loan of 5000
              </ActionButton>
            </>
          ) : (
            <>
              <ActionInput
                value={amount}
                onChange={(e) =>
                  dispatch({
                    type: "setAmount",
                    payload: Number(e.target.value),
                  })
                }
                onAction={() => dispatch({ type: "deposit", payload: amount })}
                actionLabel={`Deposit ${amount}`}
                actionClass="bg-green-500 hover:bg-green-600"
                disabled={!isActive}
              />
              <ActionInput
                value={amount}
                onChange={(e) =>
                  dispatch({
                    type: "setAmount",
                    payload: Number(e.target.value),
                  })
                }
                onAction={() => dispatch({ type: "withdraw", payload: amount })}
                actionLabel={`Withdraw ${amount}`}
                actionClass="bg-yellow-500 hover:bg-yellow-600"
                disabled={!isActive}
              />
              <ActionInput
                value={amount}
                onChange={(e) =>
                  dispatch({
                    type: "setAmount",
                    payload: Number(e.target.value),
                  })
                }
                onAction={() =>
                  dispatch({ type: "requestLoan", payload: amount })
                }
                actionLabel={`Request loan ${amount}`}
                actionClass="bg-purple-500 hover:bg-purple-600"
                disabled={!isActive}
                placeholder="Loan amount"
              />
            </>
          )}
          <ActionButton
            onClick={() => dispatch({ type: "payLoan" })}
            disabled={!isActive}
            className="bg-pink-500 hover:bg-pink-600"
          >
            Pay loan
          </ActionButton>
          <ActionButton
            onClick={() => dispatch({ type: "closeAccount" })}
            disabled={!isActive}
            className="bg-red-600 hover:bg-red-700"
          >
            Close account
          </ActionButton>
        </div>
      </div>
    </div>
  );
}

export default BankApp;
