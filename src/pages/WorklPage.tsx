import { Description } from "../components/HomeSections/Description"
import { ShowModels } from "../components/HomeSections/ShowModels"

export const Work = () => {

    return (
        <>
            <div className='mt-5 lg:mt-10 grid gap-y-3'>
                <Description />
                <ShowModels />
            </div>
        </>
    )
}