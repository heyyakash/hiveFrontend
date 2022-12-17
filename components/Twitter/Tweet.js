import React from 'react'

const Tweet = ({t,includes}) => {
    // console.log(tweets?.includes)
  return (
    <div className='bg-white rounded-xl py-2 px-4 h-[75px] flex items-center gap-2'>
        <div>
            <div className='bg-gray-300 rounded-full overflow-hidden h-10 w-10'>
                <img src={includes?.users[0].profile_image_url} alt="" />
            </div>
        </div>
        <div className='grow text-sm'>
        {t.text}
        </div>
    </div>
  )
}

export default Tweet