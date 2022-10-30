import { NextPage } from "next"
import { BiCommentX } from "react-icons/bi"
import { MdOutlineVideocamOff } from "react-icons/md"

interface IProps {
	text: string
	type: string
}

const NoResults: NextPage<IProps> = ({ text, type }) => {
	return (
		<div className='flex flex-col justify-center items-center h-full w-full'>
			<p className='text-8xl'>
				{type === "comment" ? <BiCommentX /> : <MdOutlineVideocamOff />}
			</p>
			<p className='text-2xl text-center'>{text}</p>
		</div>
	)
}

export default NoResults
