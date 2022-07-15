let newSum = (nums, target)=>{
    const pValues = {}
    for (let i =0; i<nums.length; i++){
        const currentNum = nums[i]
        const nValue = target - currentNum
        const index2 = pValues[nValue]
        if(index2 != null){
            return [index2, 1]
        } else{
            pValues[currentNum] = i
        }
    }

}