<template>
  <div class="w-full text-gray-900 bg-white">
    <div class="flex flex-col px-4 md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
      <div class="p-4 flex flex-row items-center justify-between">
        <Logo />
        <button
          class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
          @click="navIsOpen = !navIsOpen"
        >
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
            <path
              v-if="!navIsOpen"
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
            <path
              v-else
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <nav
        :class="{ flex: navIsOpen, hidden: !navIsOpen }"
        class="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row"
      >
        <NavLink :to="localePath('/')">
          {{ $t('nav.home_page') }}
        </NavLink>

        <!-- Branch -->
        <NavDropdown :title="$t('nav.branch.title')">
          <NavLink :to="localePath('/page/812443')">
            {{ $t('nav.branch.charter') }}
          </NavLink>
          <NavLink :to="localePath('/page/346504')">
            {{ $t('nav.branch.history') }}
          </NavLink>
          <NavLink :to="localePath('/page/523539')">
            {{ $t('nav.branch.administration') }}
          </NavLink>
          <NavDropdown :title="$t('nav.branch.faculties.title')">
            <NavLink :to="localePath('/page/488834')">
              {{ $t('nav.branch.faculties.directing_and_acting_skills') }}
            </NavLink>
            <NavLink :to="localePath('/page/430337')">
              {{ $t('nav.branch.faculties.social_and_humanities_sciences') }}
            </NavLink>
            <NavLink :to="localePath('/page/936103')">
              {{ $t('nav.branch.faculties.texnogen') }}
            </NavLink>
            <NavLink :to="localePath('/page/336080')">
              {{ $t('nav.branch.faculties.folk_art_culture') }}
            </NavLink>
          </NavDropdown>
          <NavDropdown :title="$t('nav.branch.center_and_divisions.title')">
            <NavLink :to="localePath('/page/256927')">
              {{ $t('nav.branch.center_and_divisions.center_of_information_resource') }}
            </NavLink>
            <NavLink :to="localePath('/page/934080')">
              {{ $t('nav.branch.center_and_divisions.center_of_information_technologies') }}
            </NavLink>
            <NavLink :to="localePath('/page/929733')">
              {{ $t('nav.branch.center_and_divisions.department_of_international_relations') }}
            </NavLink>
            <NavLink :to="localePath('/page/836289')">
              {{
                $t('nav.branch.center_and_divisions.department_of_monitoring_and_internal_control')
              }}
            </NavLink>
            <NavLink :to="localePath('/page/116020')">
              {{ $t('nav.branch.center_and_divisions.department_of_quality') }}
            </NavLink>
            <NavLink :to="localePath('/page/943926')">
              {{ $t('nav.branch.center_and_divisions.department_of_youth') }}
            </NavLink>
            <NavLink :to="localePath('/page/359037')">
              {{ $t('nav.branch.center_and_divisions.educational_and_methodical_activities') }}
            </NavLink>
            <NavLink :to="localePath('/page/115490')">
              {{ $t('nav.branch.center_and_divisions.hr') }}
            </NavLink>
            <NavLink :to="localePath('/page/105754')">
              {{ $t('nav.branch.center_and_divisions.legal_counsel') }}
            </NavLink>
            <NavLink :to="localePath('/page/159394')">
              {{ $t('nav.branch.center_and_divisions.marketing') }}
            </NavLink>
            <NavLink :to="localePath('/page/988973')">
              {{ $t('nav.branch.center_and_divisions.office_department') }}
            </NavLink>
            <NavLink :to="localePath('/page/533688')">
              {{ $t('nav.branch.center_and_divisions.press_secretary') }}
            </NavLink>
            <NavLink :to="localePath('/page/347792')">
              {{ $t('nav.branch.center_and_divisions.scientific_department') }}
            </NavLink>
            <NavLink :to="localePath('/page/102266')">
              {{ $t('nav.branch.center_and_divisions.scientific_innovative') }}
            </NavLink>
            <NavLink :to="localePath('/page/405277')">
              {{ $t('nav.branch.center_and_divisions.trade_union') }}
            </NavLink>
            <NavLink :to="localePath('/page/840155')">
              {{ $t('nav.branch.center_and_divisions.womens_committee') }}
            </NavLink>
          </NavDropdown>
          <NavLink :to="localePath('/page/971608')">
            {{ $t('nav.branch.vacancies') }}
          </NavLink>
        </NavDropdown>
        <!-- Branch END -->

        <!-- Activity -->
        <NavDropdown :title="$t('nav.activity.title')">
          <NavDropdown :title="$t('nav.activity.scientific_activity')">
            <NavLink :to="localePath('/page/416826')">
              {{ $t('nav.activity.scientific_council') }}
            </NavLink>
            <NavLink :to="localePath('/page/738883')">
              {{ $t('nav.activity.collection_of_documents_on_scientific_research') }}
            </NavLink>
          </NavDropdown>
          <NavDropdown :title="$t('nav.activity.financial_activity')">
            <NavLink :to="localePath('/page/407020')">
              {{ $t('nav.activity.alumni_monitoring') }}
            </NavLink>
            <NavLink :to="localePath('/page/649331')">
              {{ $t('nav.activity.job_placement') }}
            </NavLink>
            <NavLink :to="localePath('/page/617826')">
              {{ $t('nav.activity.marketing') }}
            </NavLink>
            <NavLink :to="localePath('/page/826537')">
              {{ $t('nav.activity.sample_of_contracts') }}
            </NavLink>
          </NavDropdown>
          <NavDropdown :title="$t('nav.activity.culture_and_educational_activities')">
            <NavLink :to="localePath('/page/941297')">
              {{ $t('nav.activity.culture_and_educational_activities') }}
            </NavLink>
            <NavLink :to="localePath('/page/124933')">
              {{ $t('nav.activity.sports_events') }}
            </NavLink>
            <NavLink :to="localePath('/page/891032')">
              {{ $t('nav.activity.student_life') }}
            </NavLink>
            <NavLink :to="localePath('/page/867706')">
              {{ $t('nav.activity.youth_union') }}
            </NavLink>
          </NavDropdown>
        </NavDropdown>
        <!-- Activity END -->

        <!-- Applicants -->
        <NavDropdown :title="$t('nav.applicants.title')">
          <NavLink :to="localePath('/page/373495')">
            {{ $t('nav.applicants.be_aware') }}
          </NavLink>
          <NavLink :to="localePath('/page/769451')">
            {{ $t('nav.applicants.notes_of_applicants') }}
          </NavLink>
          <NavLink :to="localePath('/page/429298')">
            {{ $t('nav.applicants.privileges') }}
          </NavLink>
          <NavLink :to="localePath('/page/283992')">
            {{ $t('nav.applicants.admission_quota') }}
          </NavLink>
          <NavLink :to="localePath('/page/186839')">
            {{ $t('nav.applicants.admission_to_distance_learning') }}
          </NavLink>
          <NavLink :to="localePath('/page/621187')">
            {{ $t('nav.applicants.foreign_applicants') }}
          </NavLink>
          <NavLink :to="localePath('/page/212620')">
            {{ $t('nav.applicants.admission_commission') }}
          </NavLink>
          <NavLink :to="localePath('/page/314798')">
            {{ $t('nav.applicants.admission_monitoring') }}
          </NavLink>
          <NavLink :to="localePath('/page/823269')">
            {{ $t('nav.applicants.package_of_documents') }}
          </NavLink>
          <NavLink :to="localePath('/page/530228')">
            {{ $t('nav.applicants.list_of_exam_subjects') }}
          </NavLink>
          <NavLink :to="localePath('/page/129368')">
            {{ $t('nav.applicants.creative_exam_requirements') }}
          </NavLink>
          <NavDropdown :title="$t('nav.applicants.test_exam_results')">
            <NavLink :to="localePath('/page/286054')">
              5350600 - Kutubxona-axborot faoliyati (Faoliyat turlari bo’yicha) – Kunduzgi
            </NavLink>
            <NavLink :to="localePath('/page/751156')">
              5350600 - Kutubxona-axborot faoliyati (Faoliyat turlari bo’yicha) – Sirtqi
            </NavLink>
            <NavLink :to="localePath('/page/459476')">
              5151700 – Madaniyat va san’at muassasalarini tashkil etish hamda boshqarish – Kunduzgi
            </NavLink>
            <NavLink :to="localePath('/page/517909')">
              5151700 – Madaniyat va san’at muassasalarini tashkil etish hamda boshqarish – Sirtqi
            </NavLink>
            <NavLink :to="localePath('/page/339876')">Imtiyoz</NavLink>
          </NavDropdown>
          <NavDropdown :title="$t('nav.applicants.creative_exam_results')">
            <NavLink :to="localePath('/page/612413')">
              5111011 – Professional ta’limi (5151600 Xalq ijodiyoti Vokal ijrochiligi) – Kunduzgi
            </NavLink>
            <NavLink :to="localePath('/page/350640')">
              5150207 – San’atshunoslik (Saxna va ekran san’ati dramaturgiyasi) – Kunduzgi
            </NavLink>
            <NavLink :to="localePath('/page/349397')">
              5150207 – San’atshunoslik (Saxna va ekran san’ati dramaturgiyasi) – Sirtqi
            </NavLink>
            <NavLink :to="localePath('/page/962800')">
              5150302 – Aktyorlik san’ati (Musiqali teatr aktorligi) – Kunduzgi
            </NavLink>
            <NavLink :to="localePath('/page/386690')">
              5150400 – Rejissyorlik (Musiqiy teatr rejissyorligi) – Kunduzgi
            </NavLink>
            <NavLink :to="localePath('/page/630708')">
              5151400 – Texnogen san’ati (Kino, televideniye va radio ovoz rejissyorligi) – Kunduzgi
            </NavLink>
            <NavLink :to="localePath('/page/890665')">
              5151500 – Kino-teleoperatorlik – Kunduzgi
            </NavLink>
            <NavLink :to="localePath('/page/418883')">
              5151600 – Xalq ijodiyoti (Ashula va raqs) – Kunduzgi
            </NavLink>
          </NavDropdown>
          <NavLink :to="localePath('/page/386187')">
            {{ $t('nav.applicants.statistics_of_passing_points') }}
          </NavLink>
        </NavDropdown>
        <!-- Applicants END -->

        <!-- Students -->
        <NavDropdown :title="$t('nav.students.title')">
          <NavLink :to="localePath('/page/372741')">
            {{ $t('nav.students.instructions') }}
          </NavLink>
          <NavDropdown :title="$t('nav.students.gifted_students')">
            <NavLink :to="localePath('/page/586452')">I - Course</NavLink>
            <NavLink :to="localePath('/page/558200')">II - Course</NavLink>
            <NavLink :to="localePath('/page/888440')">III - Course</NavLink>
            <NavLink :to="localePath('/page/211719')">IV - Course</NavLink>
          </NavDropdown>
          <NavLink :to="localePath('/page/967744')">
            {{ $t('nav.students.class_schedul') }}
          </NavLink>
          <NavLink :to="localePath('/page/501643')">
            {{ $t('nav.students.mastering') }}
          </NavLink>
          <NavLink :to="localePath('/page/898111')">
            {{ $t('nav.students.attendance') }}
          </NavLink>
          <NavLink :to="localePath('/page/865637')">
            {{ $t('nav.students.protection_of_graduation_qualification_work') }}
          </NavLink>
        </NavDropdown>
        <!-- Students END -->

        <!-- Interactive services -->
        <NavDropdown :title="$t('nav.interactive_services.title')">
          <NavLink :to="localePath('/page/153098')">
            {{ $t('nav.interactive_services.electronic_acceptance_of_applicants_applications') }}
          </NavLink>
          <NavLink :to="localePath('/page/545018')">
            {{ $t('nav.interactive_services.get_a_student_certificate') }}
          </NavLink>
          <NavLink :to="localePath('/page/602808')">
            {{ $t('nav.interactive_services.higher_education_diploma_confirmation') }}
          </NavLink>
          <NavLink :to="localePath('/page/402706')">
            {{
              $t('nav.interactive_services.possibility_to_get_an_electronic_copy_of_the_diploma')
            }}
          </NavLink>
        </NavDropdown>
        <!-- Interactive services END -->

        <!-- Normative-Legal documents -->
        <NavDropdown :title="$t('nav.normative_legal_documents.title')">
          <NavLink :to="localePath('/page/840956')">
            {{ $t('nav.normative_legal_documents.presidential_decrees_and_resolutions') }}
          </NavLink>
          <NavLink :to="localePath('/page/585703')">
            {{ $t('nav.normative_legal_documents.government_decisions_and_programs') }}
          </NavLink>
          <NavLink :to="localePath('/page/651125')">
            {{ $t('nav.normative_legal_documents.normative_legal_and_executive_documents') }}
          </NavLink>
        </NavDropdown>
        <!-- Normative-Legal documents END -->

        <NavLink :to="localePath('/news')">{{ $t('nav.news') }}</NavLink>
        <NavLink :to="localePath('/page/786124')">{{ $t('nav.contacts') }}</NavLink>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navIsOpen: false,
    }
  },
}
</script>
