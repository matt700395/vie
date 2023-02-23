import React, { useEffect, useRef } from 'react';

function VideoFeed() {
    const imgRef = useRef(null);
    const socketRef = useRef(null);

    useEffect(() => {
        // Create a new WebSocket connection
        socketRef.current = new WebSocket('ws://localhost:8000/video-feed');

        // Handle messages received from the server
        socketRef.current.onmessage = (event) => {
            // Convert the binary data to a Blob object and create a URL for the image data
            const blob = new Blob([event.data], { type: 'image/jpeg' });
            const imageUrl = URL.createObjectURL(blob);

            // Update the "src" attribute of the img element to display the new image
            imgRef.current.src = imageUrl;
        };

        // Clean up the WebSocket connection when the component is unmounted
        return () => {
            if (socketRef.current) {
                socketRef.current.close();
            }
        };
    }, []);

    return (
        <img ref={imgRef} alt="video feed"
        style={{
            width: '50%',
            height: 'auto',
            margin: '0 auto',
            display: 'block',
            '@media (max-width: 767px)': {
              width: '70%',
              height: 'auto'
            }
          }}/>
    );
}

export default VideoFeed;
