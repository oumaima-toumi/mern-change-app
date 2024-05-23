

const Message = ({Variant,children}) => {
    const getVariantClass= ()=>{
        switch(Variant){
            case "success": 
            return 'bg-green-100 text-green-800' ;
            case "error": 
            return 'bg-red-100 text-red-800' ;
            default :
            'bg-blue-100 text-blue-800'; 
        }
    }
  return (
    <div className={`p-4 rounded ${getVariantClass()}`}>{children}
      
    </div>
  )
}

export default Message
