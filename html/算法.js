// 冒泡相邻两个元素两两比较
/**
 * 冒泡排序
 */
// [10, 2, 30, 4, 6, 1, 20, 9]
// 0  j=0 10 j+1=1 2  [2, 10, 30,4, 6, 1, 20, 9]
// 0 j=1 10 j+1=2 30 [2, 10, 30,4, 6, 1, 20, 9]
// 0 j=2 30 j+1=3 4  [2, 10,4,  30,6, 1, 20, 9]
// const arr = [10, 2, 30, 4, 6, 1, 20, 9]
// const bubble = (arr) => {
//   const len = arr.length;
//   let pos = 0;
//   let flag = 0;
//   let k = len - 1;
//   for(let i = 0; i< len - 1; i++){
//       pos=  0
//       flag = 0
//     for (let j = 0; j < k; j++) {
//       if (arr[j] > arr[j+1]) {
//         const temp = arr[j+1]
//         arr[j+1] = arr[j]
//         arr[j] = temp;
//         flag = 1;
//         pos = j;
//       }
//       console.log('arr', arr)
//     }
//     if (flag == 0) {
//         return
//     }
//     k = pos
//   }
// }
// console.time()
// bubble(arr)
// console.timeEnd()
/**
 * 选择排序
 */
// const sort = (arr) => {
//   const len = arr.length
//   let minIndex, temp;
//   for (let i = 0;i<len;i++) {
//     minIndex = i
//     for (let j = i + 1;j<len;j++) {
//       if (arr[j] < arr[minIndex])  {
//         minIndex = j
//       }
//     }
//     temp = arr[i]
//     arr[i] = arr[minIndex]
//     arr[minIndex] = temp
//   }
//   console.log(minIndex, temp)
//   return arr
// }
// sort(arr)
/**
 * 原理: 比较上一个值和当前值的大小,若上一个值大于当前值,互换位置,然后下标递减继续和上一个比较
 * @type {number[]}
 */
/**
 * 插入排序
 */
// const insert = (arr) => {
//   const len = arr.length
//   let preIndex, current;
//   for (let i = 1; i <len; i++) {
//     preIndex = i - 1
//     current = arr[i]
//     while (preIndex >= 0 && arr[preIndex] > current) {
//       arr[preIndex+1] = arr[preIndex]
//       preIndex--
//     }
//     arr[preIndex+1] = current
//   }
// }
// insert(arr)d
// const arr = [10, 2, 30, 4, 6, 1, 20, 9]
/**
 * 希尔排序
 */
// const xe = (arr) => {
//   let len = arr.length,
//       temp,
//       gap = 1;
//   while(gap < len / 3) {          //动态定义间隔序列
//     gap =gap * 3 + 1;
//   }
//   // 循环分组
//  // [10, 2, 30, 4] [6, 1, 20, 9] =>[6, 10, 1, 2, 20, 30, 4, 9]
//     // [6, 10, 1, 2, 20, 30, 4, 9] => []
//   for (gap; gap > 0; gap=Math.floor(gap / 3)){
//       for (let i = gap; i < len; i++) {
//           temp = arr[i];
//           for (let j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
//               arr[j+gap] = arr[j];
//           }
//           arr[j+gap] = temp;
//       }
//   }
// }
// xe(arr)

/**
 * 归并排序
  * @type {number[]}
 */

const arr = [10, 2, 30, 4, 6, 1, 10, 20, 9]
// const gb = (arr) => {
//     const len = arr.length
//     if (len < 2) return arr
//     const middle = Math.floor(len / 2),
//     left = arr.slice(0, middle),
//     right = arr.slice(middle)
//     console.log('left',left,'right', right)
//     return merge(gb(left), gb(right))
// }
//
// const merge = (left, right) => {
//     console.log('------','left=',left,'right=',right)
//     const res = []
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             res.push(left.shift())
//         } else{
//             res.push(right.shift())
//         }
//     }
//     while (left.length) {
//         res.push(left.shift())
//     }
//     while (right.length) {
//         res.push(right.shift())
//     }
//     console.log('res', res)
//     return res
// }
//
// console.time()
// gb(arr)
// console.timeEnd()

// const arr = [10, 2, 30, 4, 6, 1, 20, 9]
// i = 0 => 10 j = 7 => 9  === i = 1 j = 7   [10,9,30,4,6,1,20,2]
// i = 1 => 2   j = 7=>9  === i = 2 j = 7 => [10,9,2,4,6,1,20,30]
// i = 2 => 2   j = 7=>9  === i = 3 j = 6 => [10,9,2,20,6,1,4,30]
// i = 3 => 20 j = 6=>4   === i = 3 j = 6 => [10,9,2,4,6,1,20,30]
// i = 3 => 4 j = 6=>20   === i = 4 j = 5 => [10,9,2,4,1,6,20,30]
// i = 4 => 1 j = 5=>6   === i = 5 j = 5 => [6,9,2,4,1,10,20,30]
/**
 * 快速排序
 */
// const quick = (arr, begin, end) => {
//    if (begin >= end)  return;
//     const temp = arr[begin] //基准值
//     let i =  begin
//     let j = end
//     while (i < j) {
//         if (arr[i] <= temp && i < j) {
//             i++
//         }
//         if (arr[j] >=temp && i < j) {
//             j--
//         }
//         const t = arr[i]
//         arr[i] = arr[j]
//         arr[j] = t
//     }
//     arr[begin] = arr[i]
//     arr[i] = temp
//     console.log(arr)
//     quick(arr, begin, i-1)
//     quick(arr, i+1, end)
// }
// console.time()
// quick(arr, 0, arr.length - 1)
// console.timeEnd()

/**
 * 计数排序
 */
// const count = (arr) => {
//     const max = Math.max( ...arr),
//         min = Math.min(...arr)
//     let obj = {}
//     for (let i = min; i <= max; i++) {
//         obj[i] = 0
//     }
//     arr.forEach(item => {
//         for (let key in obj){
//             if (item == key) {
//                 obj[item] += 1
//             }
//         }
//     })
//     let res = []
//     for (let key in obj) {
//         for (let i=0; i<obj[key];i++){
//             res.push(key)
//         }
//     }
//     console.log(res)
// }
//
// console.time()
// count(arr)
// console.timeEnd()

/**
 * 计数排序
 */
function countingSort(arr) {
    var arrLen = arr.length,
        bucketLen = 31,
        bucket = new Array(bucketLen).fill(0),
        sortedIndex = 0;
    for (var i = 0; i < arrLen; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0
        }
        bucket[arr[i]]++;
    }
    // console.log(bucket, bucketLen)
    for (let j = 0; j < bucketLen; j++){
        while (bucket[j] > 0) {
            arr[sortedIndex++] = j
            bucket[j]--
        }
    }
    return arr;
}
console.log(JSON.stringify(arr))
console.time()
console.log(countingSort(arr))
console.timeEnd()

/**
 * 堆排序
 * 二叉树节点
 * 大顶堆：arr[i] >= arr[2i+1] && arr[i] >= arr[2i+2]
 * 小顶堆：arr[i] <= arr[2i+1] && arr[i] <= arr[2i+2]
 *
 */
/**
 *      10                   10            10
 *    2     30              2   30        9   30
 *   4  6  1  20           9  6  1 20    2  6  1 20
 *   9                    4             4
 */

// const heap = (arr)=>{
//     let len = arr.length,
//         k = len / 2 - 1;
//     for (let i = k; i>=0; i--) {
//         adjustHeap(arr, i, len)
//     }
//     console.log(arr)
//     for (let j = len - 1; j>0; j--) {
//         swap(arr, 0, j)
//         adjustHeap(arr, 0, j)
//     }
//     console.log(arr)
// }
//
// const adjustHeap = (arr, i, length) =>{
//     let temp = arr[i];//先取出当前元素i
//     for(let k=i*2+1;k<length;k=k*2+1){//从i结点的左子结点开始，也就是2i+1处开始
//         if(k+1<length && arr[k]<arr[k+1]){//如果左子结点小于右子结点，k指向右子结点
//             k++;
//         }
//         if(arr[k] >temp){//如果子节点大于父节点，将子节点值赋给父节点（不用进行交换）
//             arr[i] = arr[k];
//             i = k;
//         }else{
//             break;
//         }
//     }
//     arr[i] = temp;//将temp值放到最终的位置
// }
//
// const swap = (arr, i , j) => {
//     const temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }
//
// heap(arr)

// const bucket = (arr) => {
//     const len = arr.length;
//     let bucket = new Array(4)
//     let bl = bucket.length
//     for (let i =0; i<bl;i++) {
//         bucket[i] = []
//     }
//
//     for (let i =0; i <len; i++) {
//         const index = parseInt(arr[i] / 10)
//         bucket[index].push(arr[i])
//     }
//     for (let i = 0; i < bl; i++){
//         bucket[i].sort()
//     }
//     console.log('bucket', bucket)
// }
//
// bucket(arr)



// 深度广度

const res = {
    value: 'a',
    children: [
        {
            value: 'b',
            children: [
                {
                    value: 'd',
                    children: []
                },
                {
                    value: 'e',
                    children: []
                },
                {
                    value: 'f',
                    children: []
                }
            ]
        },
        {
            value: 'c',
            children: [
                {
                    value: 'g',
                    children: []
                },
                {
                    value: 'h',
                    children: []
                },
                {
                    value: 'i',
                    children: []
                }
            ]
        }
    ]
}

// 深度
function DFS(data){
    if (!data) return
    console.log('DFS', data.value)
    data.children.forEach(item => {
        DFS(item)
    } )
}

DFS(res)

// 广度
function BFS(data){
    if (!data) return
    const queue = [data]
    while (queue.length){
        const top = queue.shift()
        console.log('BFS', top.value)
        top.children.forEach(child => {
            queue.push(child)
        })
    }
}

BFS(res)


// 回溯

var combine = function (n, k){
    let res = [], path = []
    combineHelper(n, k, 1)
    return res

    function combineHelper(n, k, startIndex){
        if (path.length == k) {
            res.push([...path])
            return
        }
        for (let i = startIndex; i<=n-(k-path.length) + 1; i++) {
            path.push(i)
            combineHelper(n, k, i+1)
            path.pop()
        }
    }
}

console.log(combine(4, 2))

