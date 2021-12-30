

const parse = require('nodemon/lib/cli/parse');
const createqq=require('../usecopy/stumongo')


//post方法
const create=async (req,res)=>{
  
//1 接收数据
//let dataq={"uname":"ooooo","age":99};
2//过滤数据
let data1=req.body;
console.log('------------')
console.log(data1);
3
let rs=  await createqq.createmo(data1)
if(rs){
  res.send({
    meta: {
      state: "200",
      msg: "成功"
    },
    data: null
    
  })
}else{
  res.send({
    meta: {
      state: "500",
      msg:"失败了"
    },
    data: null
    
  })
}


}

const findsu=async(req,res)=>{
  let dataw=req.query
  console.log(dataw)
  let skip1=(parseInt(dataw.pageno)-1)*parseInt(dataw.pagesize)
   let data=await createqq.findlist(skip1,parseInt(dataw.pagesize));
  // console.log(gg)
  res.send(
    {
      meta: {
        state: "200",
        msg: "成功"
      },
      data: data
      
    }
  )
}

module.exports ={ 
  create,
  findsu
  
}