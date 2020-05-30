const describe = (desc, fn) => {
  // desc is the function we are calling, which contains the below information:
  subject = eval('new ' + Class);
  // eval evaluates and executes and expression
  console.log(desc);
  fn();
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (value) => {
    if (exp === value) {
      console.log('     pass')
    } else {
      console.log('     fail')
    }
  },

toBeAnInstanceOf: (value) => {
  if(exp.constructor === value){
    console.log('     pass')
  }else{
    console.log('     fail')
  }
},


toInclude: (value) => {
  if(exp.includes(value)){
    console.log('     pass')
  }else{
    console.log('     fail')
  }
},

toHaveBeenCalled: (value) => {
  if (exp.call(value)) {
    console.log('pass')
  } else {
    console.log('fail')
  }
},

toHaveStatusCode: (value) => {
  if (exp.responseStatus() === "201"){
    console.log('pass')
  } else {
    console.log('fail')
  }
},
})

const expect = (exp) => matchers(exp)
