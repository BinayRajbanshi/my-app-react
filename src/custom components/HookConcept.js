import React , {useState} from 'react'

export default function HookConcept() {

    const [myStyle , myAlteredStyle] = useState({
        color:'black',
        border:"2px solid black"
    })

    const [innitialBtn , finalBtn] = useState('AlterCss')
    let ToggleAlterCSS = () =>{
        if(myStyle.border=="2px solid black"){
            myAlteredStyle({
                textAlign:'center',
                color:'white',
                padding:'5px',
                backgroundColor:'black'
            });
            finalBtn("Back to Normal");
        }
        else {
            finalBtn('Alter Css');
            myAlteredStyle({
                color:'black',
                border:'2px solid black'
            })
        }
       
    }

  return (
    <div>
      <h1 className='text-center'>Playing with CSS with the help of Hooks concept</h1>
        <div className='container border border-2 border-black' style={myStyle}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit libero augue, id facilisis est sodales eget. Maecenas eget laoreet arcu. Cras metus mi, egestas eu feugiat sed, ultrices nec nisl. Nunc purus odio, placerat non porta in, porta ut magna. Nam consectetur, nisi sit amet volutpat rhoncus, mauris ipsum suscipit nulla, et malesuada justo elit ac felis. Phasellus non sodales augue. Morbi vitae est ut leo euismod tincidunt. Vestibulum ultricies pellentesque blandit.</p>

            <p>Ut at cursus nibh. Phasellus ac metus libero. Nunc ipsum eros, feugiat eget odio id, facilisis scelerisque nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus viverra vehicula ipsum, quis molestie dolor laoreet eget. Pellentesque nec pellentesque nulla, quis eleifend nibh. Morbi eu sapien consectetur, gravida orci ac, ultrices nulla. Cras aliquet et nunc at convallis.</p>

            <p>Donec a tortor vel est commodo varius vel sed arcu. Morbi sed arcu ultricies, viverra neque in, varius erat. Morbi blandit vitae dui et scelerisque. Curabitur in diam nec elit pretium rhoncus. Sed ornare tempor orci sed aliquet. In auctor nulla ac mi fringilla vestibulum. Curabitur cursus, massa sit amet cursus dignissim, mi urna ultrices tortor, eget venenatis risus ante quis sapien. Vestibulum vulputate lacus metus, vel tincidunt ante tincidunt et.</p>

            <p>Donec mollis tristique metus. Sed at congue libero. Quisque venenatis suscipit tincidunt. Fusce molestie ipsum id massa interdum condimentum. Curabitur convallis sem eget condimentum gravida. Vestibulum a ex sit amet orci dignissim porta. Nulla quis quam ante. In bibendum posuere feugiat.</p>
        </div>
        <div className='container'>
            <button type="button" onClick={ToggleAlterCSS} className="btn btn-secondary">{innitialBtn}</button>
        </div>
    </div>
  )
}
