import React from 'react'

const Widget = () => {
    return (
        <div className='widgets'>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCryptoComOfficial%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="1500"
                title="This is a unique title"
                style={{border:"none", overflow:"hidden"}}
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
                ></iframe>
        </div>
    )
}

export default Widget
