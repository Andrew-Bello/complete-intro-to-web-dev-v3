const nums = document.querySelectorAll(".num");

for(let i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', () => {
        console.log(nums[i].value)
    })
}