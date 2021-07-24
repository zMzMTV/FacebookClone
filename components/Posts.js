import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import Post from './Post'
import { db } from '../firebase'

const Posts = () => {
    const [realTimePosts] = useCollection(
        db.collection('posts').orderBy("timestamp", "desc")
    )

    return (
        <div>
            {realTimePosts?.docs.map(post => {
                return (
                        <Post
                            key={post.id}
                            name={post.data().name}
                            message={post.data().message}
                            timestamp={post.data().timestamp}
                            image={post.data().image}
                            postImage={post.data().postImage}
                        />
                )
                
            })}
        </div>
    )
}

export default Posts
