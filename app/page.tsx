import { supabase } from '@/lib/supabase'
import { Course } from '@/lib/supabase'
import HeroTile from '@/components/HeroTile'
import CourseCard from '@/components/CourseCard'
import ActivityTile from '@/components/ActivityTile'
import StatsTile from '@/components/StatsTile'
import { Suspense } from 'react'
import SkeletonLoader from '@/components/SkeletonLoader'

async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })
  if (error) return []
  return data || []
}

export default async function Home() {
  const courses = await getCourses()

  return (
    <section className="p-4 md:p-6 lg:p-8 min-h-screen bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Hero - full width */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <HeroTile />
          </div>

          {/* Activity - 2 cols */}
          <div className="col-span-1 md:col-span-2">
            <ActivityTile />
          </div>

          {/* Stats - 1 col */}
          <div className="col-span-1">
            <StatsTile courses={courses} />
          </div>

          {/* Course Cards */}
          <Suspense fallback={<SkeletonLoader />}>
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </Suspense>

        </div>
      </div>
    </section>
  )
}