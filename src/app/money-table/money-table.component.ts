import { Component, OnInit } from '@angular/core';

interface Value {
  date: string;
  debitAmount: number;
  creditAmount: number;
}

interface EntityList {
  accountId: number;
  accountName: string;
  periodBeginBalance: number;
  periodEndBalance: number;
  organizationId: number;
  organizationName: string;
  values: Value[];
}

interface MoneyMovingAPIResponse {
  entityList: EntityList[];
}

@Component({
  selector: 'app-money-table',
  templateUrl: './money-table.component.html',
  styleUrls: ['./money-table.component.scss']
})
export class MoneyTableComponent implements OnInit {

  title = 'auto-dealer';
  saldosPerMonth: number[] = []
  balancesPerMonth: number[] = []
  totalSaldo = 0
  initialBalance = 0
  endBalance = 0
  data: MoneyMovingAPIResponse = {
    "entityList": [
      {
        "accountId": 18520,
        "accountName": "Касса",
        "periodBeginBalance": 27380,
        "periodEndBalance": 33586.55,
        "organizationId": 6826,
        "organizationName": "ООО Автосервис",
        "values": [
          {
            "date": "2022-01",
            "debitAmount": 5600,
            "creditAmount": -1453,
          },
          {
            "date": "2022-02",
            "debitAmount": 3750,
            "creditAmount": -890.45,
          },
          {
            "date": "2022-03",
            "debitAmount": 0,
            "creditAmount": -800,
          },
        ],
      },
      {
        "accountId": 18520,
        "accountName": "Касса #2",
        "periodBeginBalance": 6890,
        "periodEndBalance": 37260,
        "organizationId": 3835,
        "organizationName": "ООО Магазин",
        "values": [
          {
            "date": "2022-01",
            "debitAmount": 15640,
            "creditAmount": 0,
          },
          {
            "date": "2022-02",
            "debitAmount": 6000,
            "creditAmount": -3400,
          },
          {
            "date": "2022-03",
            "debitAmount": 18200,
            "creditAmount": -6070,
          },
        ],
      }
    ],
  }
  ngOnInit(){
    this.getSaldosPerMonth()
    this.getBalances()
    this.getBalancesPerMonth()
  }
  getSaldosPerMonth(){
    this.saldosPerMonth = this.data.entityList[0].values.map((el, index) =>{
      let monthSaldo = 0
      for (const entity of this.data.entityList){
        monthSaldo += entity.values[index].debitAmount + entity.values[index].creditAmount
      }
      this.totalSaldo += monthSaldo
      return monthSaldo
    })
  }
  getBalances(){
    this.initialBalance = this.data.entityList.reduce((acc, el) => acc + el.periodBeginBalance, 0)
    this.endBalance = this.data.entityList.reduce((acc, el) => acc + el.periodEndBalance, 0)
  }
  getBalancesPerMonth(){
    this.balancesPerMonth.push(this.initialBalance + this.saldosPerMonth[0])
    for (let i = 1; i < this.saldosPerMonth.length;i++){
      this.balancesPerMonth.push(this.balancesPerMonth[i-1] + this.saldosPerMonth[i])
    }
  }
}
