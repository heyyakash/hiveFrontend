import { Html } from '@react-three/drei'
import React from 'react'
import { useQuery } from 'react-query'
import { getGithubRepos, getGithubUser, getTweets } from '../../apis/fetch'
import * as THREE from 'three'

const Github = () => {
    const { data: github } = useQuery('github', getGithubUser)
    const { data: repos } = useQuery('repos', getGithubRepos)
    console.log(github)
    console.log(repos)
    return (
        <Html transform position={[20, 10, 0]} rotation = {new THREE.Euler( 0, -0.5, 0, 'XYZ' )} className="w-[700px] overflow-scroll overflow-x-hidden py-3 px-5 h-[600px] rounded-xl bg-white/80 backdrop-blur-xl" occlude>
            <b>Github</b>
            <div className="flex mt-8 justify-between items-center gap-5">
                <div className='flex flex-col'>
                    <div className='h-[100px] w-[100px] rounded-full overflow-hidden'>
                        <img src={github?.avatar_url} alt="image" />
                    </div>
                </div>
                <div className='flex flex-col grow '>
                    <h2 className='text-xl font-bold'>{github?.login}</h2>
                    <p className='text-sm font-gray-500'>{github?.followers} Followers</p>
                    <p className='text-sm font-gray-500'>{github?.following} Following</p>
                </div>
            </div>

            <div className='mt-8 grid gap-3 grid-cols-3 grid-rows-3'>
                {repos?.map((repo) => {
                    return (
                        <a href = {repo?.html_url} target = "_blank" rel = "noopenner noreferrer" className='bg-white flex flex-col p-4 gap-2 items-center justify-center rounded-lg'>
                            <img src={repo?.owner?.avatar_url} className="h-10 rounded-full w-10" alt="" />
                            <b>{repo?.name}</b>
                            <div className='flex gap-2'>
                                <div className='rounded-lg border-2 px-2'>
                                    {repo?.forks} Forks
                                </div>  
                                <div className='rounded-lg border-2 px-2'>
                                    {repo?.open_issues_count} Issues
                                </div>  
                            </div>
                            <div className='text-sm my-2 text-center'>{repo?.description}</div>
                        </a>
                    )
                })}
            </div>
        </Html>
    )
}

export default Github