import { supabase } from '@/lib/supabase'
import { Course } from '@/lib/supabase'
import HeroTile from '@/components/HeroTile'
import CourseCard from '@/components/CourseCard'
import ActivityTile from '@/components/ActivityTile'
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
    <section className="p-6 min-h-screen bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto flex flex-col gap-4">

        {/* Hero Tile */}
        <HeroTile />

        {/* Activity Tile */}
        <ActivityTile />

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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