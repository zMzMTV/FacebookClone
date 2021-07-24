import React from 'react'
import { useSession } from 'next-auth/client'
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UserIcon,
} from '@heroicons/react/solid'
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from '@heroicons/react/outline'
import SideBarRow from './SideBarRow'

const SideBar = () => {
    const [session, loading] = useSession();

    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SideBarRow src={session.user.image} title={session.user.name}/> 
            <SideBarRow Icon={UserIcon} title="Friends"/>
            <SideBarRow Icon={UserGroupIcon} title="Groups"/>
            <SideBarRow Icon={ShoppingBagIcon} title="Marketplace"/>
            <SideBarRow Icon={DesktopComputerIcon} title="Watch"/>
            <SideBarRow Icon={CalendarIcon} title="Events"/>
            <SideBarRow Icon={ClockIcon} title="Memories"/>
            <SideBarRow Icon={ChevronDownIcon} title="See More"/>

        </div>
    )
}

export default SideBar
