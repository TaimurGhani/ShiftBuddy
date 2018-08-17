const mongoose = require('mongoose'),
			Schema = mongoose.Schema;

// Create Shift Model
let shiftSchema = new Schema({
  employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
  },
  manager: {
    type: Schema.Types.ObjectId,
    ref: "Manager",
  },
  startTime: { 
  	type: Date, 
  	default: Date.now 
  },
  endTime: {
    type: Date,
    default: Date.now
  },
  startingCash: {
    type: Number,
  },
  endingCash: {
    type: Number,
  },
  notes: [
	  {
	    type: Schema.Types.ObjectId, 
	    ref: 'Note'
	  }
  ],
  inventoryStart: [],
  inventoryStop: [],
  paidOuts: [
  	{
  		type: Schema.Types.ObjectId, 
  		ref: 'PaidOut'
  	}
  ],
  cashDrops: [
  	{
  		type: Schema.Types.ObjectId, 
  		ref: 'CashDrop'
  	}
	],
  checks: [
  	{
  		type: Schema.Types.ObjectId, 
  		ref: 'Check'
  	}
	]
}, 
{
	strict: true
});

module.exports = Shift = mongoose.model("Shift", shiftSchema);
