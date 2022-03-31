const paginate = (followers) => {
    const itemsPerPage = 10
    const numberOfPages = Math.ceil(followers.length / itemsPerPage)
  
    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return followers.slice(start, start + itemsPerPage)
    })
    return newFollowers
  }
  //            newfollowers=[array(of 10 followers)
//                            array(of 10 followers)
                                //    .
                                //    .
                                // untill 10th index]
  
  export default paginate
  