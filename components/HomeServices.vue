<template>
  <section>
    <Container>
      <div class="flex flex-col text-center w-full mb-10">
        <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">
          {{ $t('interactive_services') }}
        </h2>
      </div>

      <div class="flex flex-wrap -m-2">
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div
            class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in"
          >
            <img
              :src="require('~/assets/svg/IconGraduate.svg')"
              class="w-16 h-16 flex-shrink-0 mr-4"
            />
            <div class="flex-grow">
              <h3 class="text-gray-900 title-font font-medium">
                <NuxtLink
                  :to="
                    localePath(
                      '/interactive-services/electronic-acceptance-of-applicants-applications',
                    )
                  "
                >
                  {{
                    $t('nav.interactive_services.electronic_acceptance_of_applicants_applications')
                  }}
                </NuxtLink>
              </h3>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div
            class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in"
          >
            <img
              :src="require('~/assets/svg/IconCertificate.svg')"
              class="w-16 h-16 flex-shrink-0 mr-4"
            />
            <div class="flex-grow">
              <h3 class="text-gray-900 title-font font-medium">
                <NuxtLink :to="localePath('/interactive-services/get-a-student-certificate')">
                  {{ $t('nav.interactive_services.get_a_student_certificate') }}
                </NuxtLink>
              </h3>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div
            class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in"
          >
            <img
              :src="require('~/assets/svg/IconUniversity.svg')"
              class="w-16 h-16 flex-shrink-0 mr-4"
            />
            <div class="flex-grow">
              <h3 class="text-gray-900 title-font font-medium">
                <NuxtLink
                  :to="localePath('/interactive-services/higher-education-diploma-confirmation')"
                >
                  {{ $t('nav.interactive_services.higher_education_diploma_confirmation') }}
                </NuxtLink>
              </h3>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div
            class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in"
          >
            <img
              :src="require('~/assets/svg/IconELearning.svg')"
              class="w-16 h-16 flex-shrink-0 mr-4"
            />
            <div class="flex-grow">
              <h3 class="text-gray-900 title-font font-medium">
                <NuxtLink
                  :to="
                    localePath(
                      '/interactive-services/possibility-to-get-an-electronic-copy-of-the-diploma',
                    )
                  "
                >
                  {{
                    $t(
                      'nav.interactive_services.possibility_to_get_an_electronic_copy_of_the_diploma',
                    )
                  }}
                </NuxtLink>
              </h3>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div
            class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in"
          >
            <img
              :src="require('~/assets/svg/IconDesk.svg')"
              class="w-16 h-16 flex-shrink-0 mr-4"
            />
            <div class="flex-grow">
              <h3 class="text-gray-900 title-font font-medium">
                <NuxtLink :to="localePath('/')">
                  {{
                    $t(
                      'nav.interactive_services.electronic_submission_of_articles_to_conferences_and_scientific_journals',
                    )
                  }}
                </NuxtLink>
              </h3>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div
            class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in"
          >
            <img
              :src="require('~/assets/svg/IconInstructor.svg')"
              class="w-16 h-16 flex-shrink-0 mr-4"
            />
            <div class="flex-grow">
              <h3 class="text-gray-900 title-font font-medium">
                <NuxtLink :to="localePath('/')">
                  {{ $t('nav.interactive_services.vacancies') }}
                </NuxtLink>
              </h3>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div
            class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in"
          >
            <img
              :src="require('~/assets/svg/IconJoin.svg')"
              class="w-16 h-16 flex-shrink-0 mr-4"
            />
            <div class="flex-grow">
              <h3 class="text-gray-900 title-font font-medium">
                <NuxtLink :to="localePath('/')">
                  {{ $t('nav.interactive_services.sign_up_for_a_leaders_appointment') }}
                </NuxtLink>
              </h3>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div
            class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in"
          >
            <img
              :src="require('~/assets/svg/IconPayment.svg')"
              class="w-16 h-16 flex-shrink-0 mr-4"
            />
            <div class="flex-grow">
              <h3 class="text-gray-900 title-font font-medium">
                <NuxtLink :to="localePath('/')">
                  {{ $t('nav.interactive_services.determining_the_amount_of_payment_contract') }}
                </NuxtLink>
              </h3>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div
            class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in"
          >
            <img
              :src="require('~/assets/svg/IconCoding.svg')"
              class="w-16 h-16 flex-shrink-0 mr-4"
            />
            <div class="flex-grow">
              <h3 class="text-gray-900 title-font font-medium">
                <a href="https://ariza.uzdsmi-nf.uz" target="_blank" rel="nofollow noopener">
                  {{ $t('nav.interactive_services.stratified_payment_contract') }}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
