import React,{memo} from 'react'

 function Header(count) {
    console.log("Header bị render",count);
    // const {count} = props;
    // const a = props.count
  return (
    <div>
      Header
    </div>
  )
}
export default memo(Header)