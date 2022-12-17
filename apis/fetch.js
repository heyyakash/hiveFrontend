export const getTweets = async(username)=>{
    const data = await fetch('https://api.twitter.com/2/tweets/search/recent?query=from%3Aheyyakash&max_results=10&tweet.fields=created_at,id&expansions=author_id&user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld',{
        headers:{
            'Authorization':'Bearer AAAAAAAAAAAAAAAAAAAAAAt6kQEAAAAACjvd1zg50k8BLjsg0co%2FdH45zxQ%3DCUQibl7cgYuE1K6jjyUCWn1TSMqIXBbqe1Ed19YQ8MEohT1gZu',
            'Access-Control-Allow-Origin':'*'
        }
    })
    const res = await data.json()
    return res
}