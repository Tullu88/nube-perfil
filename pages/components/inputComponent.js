import { loadGetInitialProps } from "next/dist/shared/lib/utils"


const Input = (props) => {

    return (
        <div>
              <label htmlFor={props.htmlFor}>{props.label }</label>
                <input 
                type={props.type} 
                id={props.id} 
                name={props.name}
                placeholder={props.placeHolder}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}

                required={props.isRequired}
                oninvalid={props.oninvalid}/>
        </div>
    )
}

export default Input;