import React from 'react'
import StoryCard from './StoryCard'

const stories = [
    {
        name: "Buzz Lightyear",
        src: "/buzz.jpg",
        profile: "/buzzp.jpg",
    },
    {
        name: "Mark Zukerberg",
        src: "/mark.jpg",
        profile: "/markp.jpg",
    },
    {
        name: "Nina Kravitz",
        src: "/nina.jpg",
        profile: "/ninap.jpg",
    },
    {
        name: "Morgan Freeman",
        src: "/moragan.jpg",
        profile: "/morganp.jpg",
    },
    {
        name: "Amelie Lens",
        src: "/amilie.jpg",
        profile: "/ameliep.jpg",
    },
]

const Stories = () => {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(story => (
                <StoryCard
                    key={story.src}
                    name={story.name}
                    src={story.src}
                    profile={story.profile}
                />
            ))}
        </div>
    )
}

export default Stories
