import {media} from "../../helpers/media";
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const handleContinue = () => {
      return navigate("/app", { replace: true });
    }

    return(
        <section className="greeting py-10">
            <div className="container">
                <div className="grid grid-cols-1">
                    <div className="text-center">
                        <h1 className="mb-4 text-3xl md:text-4xl">Manage all your tasks easily!</h1>
                        <p className="text-lg">Another open-source todo application with some extended features!</p>
                        <b className="block mt-4 italic text-theme max-w-[650px] mx-auto">
                            This project is made in fun time with limited number of features in mind.
                            if you have suggestions or want to contribute on this project, you can do it on GITHUB repo.
                        </b>
                        <button onClick={handleContinue} className="btn bg-theme mt-10">Let's start</button>
                        <div className="w-full max-w-[550px] mx-auto">
                            <img className="w-full h-full object-contain" src={media.Welcome} alt="Welcome"/>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 items-center gap-10">
                    <div>
                        <img src={media.Features} alt="Prafulla Ranjan"/>
                    </div>
                    <div className="w-full">
                        <h2 className="my-10">Awesome Features</h2>
                        <ul>
                            <li className="flex items-center mb-4 last:mb-0">
                                <Icon className="w-8 h-8 text-theme" icon="bi:patch-check-fill" />
                                <span className="pl-4 text-lg">Completely offline</span>
                            </li>
                            <li className="flex items-center mb-4 last:mb-0">
                                <Icon className="w-8 h-8 text-theme" icon="bi:patch-check-fill" />
                                <span className="pl-4 text-lg">No data stored on server</span>
                            </li>
                            <li className="flex items-center mb-4 last:mb-0">
                                <Icon className="w-8 h-8 text-theme" icon="bi:patch-check-fill" />
                                <span className="pl-4 text-lg">Easily access via your browser</span>
                            </li>
                            <li className="flex items-center mb-4 last:mb-0">
                                <Icon className="w-8 h-8 text-theme" icon="bi:patch-check-fill" />
                                <span className="pl-4 text-lg">Create Multiple Tasks to do</span>
                            </li>
                            <li className="flex items-center mb-4 last:mb-0">
                                <Icon className="w-8 h-8 text-theme" icon="bi:patch-check-fill" />
                                <span className="pl-4 text-lg">Mark it as complete or delete it</span>
                            </li>
                            <li className="flex items-center mb-4 last:mb-0">
                                <Icon className="w-8 h-8 text-theme" icon="bi:patch-check-fill" />
                                <span className="pl-4 text-lg">Filter tasks using week days</span>
                            </li>
                            <li className="flex items-center mb-4 last:mb-0">
                                <Icon className="w-8 h-8 text-theme" icon="bi:patch-check-fill" />
                                <span className="pl-4 text-lg">Default created under current day</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HomePage;