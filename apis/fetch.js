export const getGithubUser = async(username)=>{
    const data = await fetch('https://api.github.com/users/heyyakash')
    const res = await data.json()
    return res
}
export const getGithubRepos = async(username)=>{
    const data = await fetch('https://api.github.com/users/heyyakash/repos')
    const res = await data.json()
    return res
}