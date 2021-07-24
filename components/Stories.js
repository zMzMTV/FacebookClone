import React from 'react'
import StoryCard from './StoryCard'

const stories = [
    {
        name: "Yassine Azem",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Yassine Azem",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Yassine Azem",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Yassine Azem",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Yassine Azem",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/kxk",
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
