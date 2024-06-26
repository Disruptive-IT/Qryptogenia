import react from 'react';
import logot from "../../../../assets/imgs/google.png"
import { SocialButton } from './socialButtons';


export const WebLinkPhone = ({socialFormValues}) => {
    console.log(socialFormValues)
    const data = Array.isArray(socialFormValues.selectedOptions) ? socialFormValues.selectedOptions.map(option => ({
        name: option.value.charAt(0).toUpperCase() + option.value.slice(1),
        icon: option.icon.props.network === 'custom' ? logot : option.icon.props.network,
        url: option.url // Include URL
    })) : [];
    return(
        <div className='ml-2 flex flex-col h-full items-center rounded-t-[52px] rounded-b-[50px] w-full p-5' style={{ background: socialFormValues.backgroundColor, minHeight: '670px', maxHeight: '670px', minWidth: '350px', maxWidth: '350px' }}>
            
            <div className='flex flex-col items-center mt-28 w-[97%] bg-white rounded-2xl' style={{ background: socialFormValues.boxColor }}>
                <div className='relative bg-white rounded-2xl -mt-14 border-4 shadow-lg' style={{borderColor:socialFormValues.borderColor}}>
                    <img className='w-20' src={socialFormValues.image || logot} alt="" />
                </div>
                <div className="mt-4 mb-2 w-[90%] text-center">
      <h1
        className="text-2xl mb-2 font-bold"
        style={{ color: socialFormValues.titleColor }}
      >
        {socialFormValues.title}
      </h1>
      <div
        className="break-words overflow-y-auto max-h-[200px] custom-scrollbar text-lg leading-relaxed relative"
        style={{ color: socialFormValues.descriptionColor }}
      >
        {socialFormValues.description}
      </div>
    </div>
            </div>
            <SocialButton data={data}/>
        </div>
    )
}