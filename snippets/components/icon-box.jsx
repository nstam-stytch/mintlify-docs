/**
  interface Props {
    icon: string
  }
*/

import { DynamicIcon } from 'lucide-react/dynamic';

export const IconBox = ({ icon }) => {

  return (
    <div className="icon-box">
      <DynamicIcon name={icon} />
    </div>
  )
}