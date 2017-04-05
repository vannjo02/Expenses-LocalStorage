"use strict"
class Expense {
	constructor(date, store, category, item, amount) {
		this.date = date
		this.store = store
		this.category = category
		this.item = item
		this.amount = amount
	}
	
}
class ExpenseDB {
	constructor() {
		this.allExpenses = [];
	}
	newExpense() {
		var expense = [];
		var inputs = document.getElementsByTagName('input');
		var length = inputs.length;
		for (var i = 0; i < length; i++) {
			var thing = String(inputs[i].value);
			var res = thing.replace("<", "&lt;");
			res = res.replace(">", "&gt;");
			expense.push(res);
		}
		var row = new Expense();
		row.date = expense[0];
		row.store = expense[1];
		row.category = expense[2];
		row.item = expense[3];
		row.amount = expense[4];
		this.allExpenses.push(row);
	}
	saveMe() {
		var arr = this.allExpenses
		localStorage.setItem("expenseData", JSON.stringify(arr));
		//realsort(getsortval(), arr); moved
	}
	restoreMe() {
		var saved = JSON.parse(localStorage.expenseData)
		for (let i = 0; i < saved.length; i++) {
			this.allExpenses.push(saved[i]);
		};
		//realsort(getsortval(), this.allExpenses); moved
	}
    deleteMe(indexArr) {
        for (let i = 0; i < indexArr.length; i++) {
            this.allExpenses.splice(indexArr[i], 1);
        }
        this.saveMe();
    }
}





