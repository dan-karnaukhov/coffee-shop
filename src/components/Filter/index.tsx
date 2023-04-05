import classNames from 'classnames'

import {
  regionOptions,
  roastingOptions,
  weightOptions,
} from '../../data/selectData'
import Select, { SelectOption } from '../Select'

import './style.scss'

type FilterProps = {
  regionFilter: SelectOption
  setRegionFilter: (option: SelectOption) => void
  roastingFilter: SelectOption
  setRoastingFilter: (option: SelectOption) => void
  weightFilter: SelectOption
  setWeightFilter: (option: SelectOption) => void
  className?: string
}

const Filter: React.FC<FilterProps> = ({
  regionFilter,
  setRegionFilter,
  roastingFilter,
  setRoastingFilter,
  weightFilter,
  setWeightFilter,
  className,
}) => {
  return (
    <div className={classNames('filter', className)}>
      <Select
        options={regionOptions}
        selectedOption={regionFilter}
        onChange={setRegionFilter}
      />
      <Select
        options={roastingOptions}
        selectedOption={roastingFilter}
        onChange={setRoastingFilter}
      />
      <Select
        options={weightOptions}
        selectedOption={weightFilter}
        onChange={setWeightFilter}
      />
    </div>
  )
}

export default Filter
