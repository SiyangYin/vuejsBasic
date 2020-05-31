const app = new Vue({
  el: '#app',
  data: {
    books: [{
      id: 1,
      name: '<<三国>>',
      date: '2020-01-01',
      price: 100,
      count: 1
    },
      {
        id: 2,
        name: '<<西游>>',
        date: '2020-01-01',
        price: 100,
        count: 1
      },
      {
        id: 3,
        name: '<<水浒>>',
        date: '2020-01-01',
        price: 100,
        count: 1
      },
      {
        id: 4,
        name: '<<红楼>>',
        date: '2020-01-01',
        price: 100,
        count: 1
      }]
  },
  computed: {
    totalPrice() {
      let total = 0;
      // for (let i = 0; i < this.books.length; i++) {
      //   total += this.books[i].price * this.books[i].count
      // }
      // for (let i in this.books) {
      //   total += this.books[i].price * this.books[i].count
      // }

      // for (let book of this.books) {
      //   total += book.price * book.count;
      // }
      // return total
      return this.books.reduce((pre, book) => {
        return pre + book.price * book.count
      }, 0)
    }
  },
  methods: {
    getFinalPrice(price) {
      return '$' + price.toFixed(2)
    },
    increase(index) {
      this.books[index].count++
    },
    decrease(index) {
      this.books[index].count--
    },
    removeRow(index) {
      this.books.splice(index, 1)
    }
  },
  filters: {
    showPrice(price) {
      return '$' + price.toFixed(2)
    }
  },

})

const nums = [10, 20, 390, 40, 11, 423, 50];
let newNums = [];
//get number in array less than 50
for (let n of nums) {
  if (n < 50) {
    newNums.push(n)
  }
}
console.log(newNums)
//double each in newNums
let newNums2 = []
for (let i of newNums) {
  newNums2.push(i * 2)
}
//count total
let total = 0;
for (let i of newNums2) {
  total += i;
}
console.log(total)
//--------expression ---advanced function,function parameter might be function
//filter return true or false depends on condition
let numbers = nums.filter(n => {
  return n < 50
})
console.log(numbers)

let doubled = numbers.map(n => {
  return n * 2
})
console.log(doubled)
//汇总数组中所有,全和,全乘, first parameter is function
let final = doubled.reduce((previousValue, n) => {
  return previousValue + n
}, 0)
console.log(final)
//functional programming
let all = nums.filter(n => {
  return n < 50
}).map(n => {
  return n * 2
}).reduce((previousValue, n) => {
  return previousValue + n
}, 0)

console.log(all)

let simpler = nums.filter(n => n < 50).map(n => n * 2).reduce((pre, n) => pre + n)
console.log('what are you doing here')
console.log(simpler)
