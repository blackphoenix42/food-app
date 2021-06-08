import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 3RxI-jjBOLKScruPkV-4FdgwfOLWaeoTvNu5bLRZltNx10hzowqlYVf8QiCXZLj4-g6xe5S7D5QiL7Qcltleyz1li-kfF1L9NnOktNa4UWMjyWPxwSBKrMNpL1u_YHYx'
    }
})

