import React, { FC, Fragment } from 'react'

type SkillsFormComponent = {
    selectedSkills: Set<string>,
    onSelectSkill: (skill: string) => void,
    skills: string[],
    errors: any
}

const SkillsForm:FC<SkillsFormComponent> = ({selectedSkills, onSelectSkill, skills, errors}) => {
  return (
      <Fragment>
          <div className='mt-2'>
              <span className='font-semibold text-lg'>Skills</span>
              {errors.skills && (
                  <p className='text-red-600 text-sm my-2'>{errors.skills.message}</p>
              )}
              <div className='flex flex-row flex-wrap items-center gap-x-4 gap-y-3 mt-2'>
                  {Array.from(new Set(skills)).map((skill, index) => (
                      <div
                          key={index}
                          onClick={() => onSelectSkill(skill)}
                          className={`cursor-pointer px-4 py-1 rounded-full border border-black  ${selectedSkills.has(skill) ? 'bg-black text-white' : ''}`}
                      >
                          <span className='text-sm'>{skill}</span>
                      </div>
                  ))}
              </div>
          </div>
    </Fragment>
  )
}

export default SkillsForm
