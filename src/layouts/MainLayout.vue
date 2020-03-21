<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>

      <q-toolbar>

        <q-img
          src="statics/logo/neonCarnival.png"
          style="width:75px"
        ></q-img>

        <div class="q-pa-md gt-sm">
          <q-btn-dropdown
            color="primary"
            label="Products"
          >
            <q-list>
              <q-item
                clickable
                v-close-popup
                @click="onItemClick"
              >
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                clickable
                v-close-popup
                @click="onItemClick"
              >
                <q-item-section>
                  <q-item-label>Videos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                clickable
                v-close-popup
                @click="onItemClick"
              >
                <q-item-section>
                  <q-item-label>Articles</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn-dropdown
            color="primary"
            label="Solutions"
          >
            <q-list>
              <q-item
                clickable
                v-close-popup
                @click="onItemClick"
              >
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                clickable
                v-close-popup
                @click="onItemClick"
              >
                <q-item-section>
                  <q-item-label>Videos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                clickable
                v-close-popup
                @click="onItemClick"
              >
                <q-item-section>
                  <q-item-label>Articles</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn-dropdown
            color="primary"
            label="Services"
          >
            <q-list>
              <q-item
                clickable
                v-close-popup
                @click="onItemClick"
              >
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                clickable
                v-close-popup
                @click="onItemClick"
              >
                <q-item-section>
                  <q-item-label>Videos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                clickable
                v-close-popup
                @click="onItemClick"
              >
                <q-item-section>
                  <q-item-label>Articles</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn-dropdown
            color="primary"
            label="Support"
          >
            <q-list>
              <q-item
                clickable
                v-close-popup
                @click="onItemClick"
              >
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                clickable
                v-close-popup
                @click="onItemClick"
              >
                <q-item-section>
                  <q-item-label>Videos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                clickable
                v-close-popup
                @click="onItemClick"
              >
                <q-item-section>
                  <q-item-label>Articles</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn-dropdown
            color="primary"
            label="Future Insights"
          >
            <q-list>
              <q-item
                clickable
                v-close-popup
                @click="onItemClick"
              >
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                clickable
                v-close-popup
                @click="onItemClick"
              >
                <q-item-section>
                  <q-item-label>Videos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                clickable
                v-close-popup
                @click="onItemClick"
              >
                <q-item-section>
                  <q-item-label>Articles</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

        </div>

        <q-space />

        <q-input
          bg-color="green"
          v-model="search"
          filled
          type="search"
          hint="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
        <q-drawer
          v-model="leftDrawerOpen"
          bordered
          content-class="bg-grey-1"
        >
          <q-list>
            <q-item-label
              header
              class="text-h5 text-black text-bold"
            >Essential Links</q-item-label>
            <EssentialLink
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
              class="text-h5 text-black text-bold"
            />
          </q-list>
        </q-drawer>
      </q-toolbar>
    </q-header>

    <div class="row">

      <q-img
        src="statics/logo/yapay_zeka_gorsel.png"
        style="max-width: 2377px; height: 500px;"
        class="q-pa-lg"
      >

        <div class="absolute-full text-subtitle1 flex flex-center text-h1 text-bold">
          Leveraging Leading-Edge Technology for Market Dominance
        </div>

        <div class="absolute-full text-subtitle2 flex flex-center text-h1 text-bold">
          Developing state-of-the-art technology to give our clients in the Financial Service Industries <br />unquestioned leadership in both
          selected and emerging markets

        </div>

      </q-img>
    </div>
    <div class="row
        text-h5
        text-bold
        q-pa-lg">

      Rapid Edge Tools

    </div>

    <div class="row">

      <div class="col-12 col-md">
        <div class="q-pa-md">
          <q-card class="my-card">
            <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

            <q-card-section>
              <div class="text-h6">Rapid Requirements Tool</div>
              <div class="text-subtitle2">Step 1</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-12 col-md">
        <div class="q-pa-md">
          <q-card class="my-card">
            <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

            <q-card-section>
              <div class="text-h6">Real-time Decisioning Configuration</div>
              <div class="text-subtitle2">Step 2</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-12 col-md">
        <div class="q-pa-md">
          <q-card class="my-card">
            <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

            <q-card-section>
              <div class="text-h6">Self-Generating Test Suite</div>
              <div class="text-subtitle2">Step 3</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>
          </q-card>
        </div>
      </div>

    </div>

    <div class="row text-h5 text-bold q-pa-lg">

      Explore Services and Support

    </div>

    <div class="row">

      <div class="col">
        <div class="row text-h6 q-pl-lg q-pb-md">IBM Spectrum Protect Plus</div>
        <div class="row">
          <q-img
            src="statics/logo/Spectrum-Protect-Plus.png"
            style="max-width: 400px; height: 200px;"
            class="q-pa-lg"
            link="https://quasar.dev"
          ></q-img>
        </div>
      </div>

      <div class="col">
        <div class="row text-h6 q-pl-lg q-pb-md">IBM MaaS360 with Watson</div>
        <div class="row">
          <q-img
            src="statics/logo/MaaS360-Watson.png"
            style="max-width: 400px; height: 200px;"
            class="q-pl-lg"
          ></q-img>
        </div>
      </div>

      <div class="col">
        <div class="row text-h6 q-pl-lg q-pb-md">Natural Language Understanding</div>
        <div class="row">
          <q-img
            src="statics/logo/Natural-Language-Understanding.png"
            style="max-width: 400px; height: 200px;"
            class="q-pa-lg"
          ></q-img>
        </div>
      </div>

      <div class="col">
        <div class="row text-h6 q-pl-lg q-pb-md">IBM Planning Analytics</div>
        <div class="row">
          <q-img
            src="statics/logo/Planning-Analytics.png"
            style="max-width: 400px; height: 200px;"
            class="q-pa-lg"
          ></q-img>
        </div>
      </div>

    </div>

    <div class="row">

      <div class="col-12 col-md text-h6 q-pl-lg q-pt-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div class="col-12 col-md text-h6 q-pl-lg q-pt-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div class="col-12 col-md text-h6 q-pl-lg q-pt-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div class="col-12 col-md text-h6 q-pl-lg q-pt-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>

    </div>

    <div class="row">

      <div class="col">
        <div class="text-h6 q-pl-lg q-pt-lg">
          Get started free ->
        </div>
      </div>

      <div class="col">
        <div class="text-h6 q-pl-lg q-pt-lg">
          Start your free 30-day trial ->
        </div>
      </div>

      <div class="col">
        <div class="text-h6 q-pl-lg q-pt-lg">
          Start your free 30-day trial ->
        </div>
      </div>

      <div class="col">
        <div class="text-h6 q-pl-lg q-pt-lg">
          Save 50% now ->
        </div>
      </div>

    </div>

    <div class="text-h6 text-bold q-pa-lg">What are you looking for?</div>

    <div class="row">

      <div class="col">
        <div class="q-pl-lg q-pa-md text-h7">
          Search for prodcts and services in Pratura Incurvo Marketplace
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <q-input
          v-model="search"
          filled
          type="search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="col"></div>
    </div>

    <div class="row">
      <div class="text-h6 text-bold q-pa-lg">
        Explore popular and trending technologies
      </div>
    </div>

    <div class="row">

      <div class="col">
        <div class="q-pl-lg">For management</div>
      </div>

      <div class="col">
        <div class="q-pl-lg">For developers</div>
      </div>

      <div class="col">
        <div class="q-pl-lg">For business analysts</div>
      </div>

    </div>

    <div class="row">
      <div class="text-h6 text-bold q-pl-lg">
        _________________________________________________________________________________________________________________________________________
      </div>
    </div>

    <div class="row">

      <div class="col">
        <div>
          <q-img
            src="statics/logo/Redhat-on-Linux.png"
            style="max-width: 200px; height: 250px;"
            class="q-pl-lg"
          ></q-img>
        </div>
        <div>Linux Z System</div>
      </div>

      <div class="col">

        <q-list>
          <q-item-label
            header
            class="text-h6 text-black text-bold"
          >IBM Developer</q-item-label>
          <DeveloperLink
            v-for="link in developerLinks"
            :key="link.title"
            v-bind="link"
            class="text-h7 text-black text-bold"
          />
        </q-list>

      </div>

      <div class="col">

        <q-list>
          <q-item-label
            header
            class="text-h6 text-black text-bold"
          >Trending in Tech</q-item-label>
          <TrendingLink
            v-for="link in trendingLinks"
            :key="link.title"
            v-bind="link"
            class="text-h7 text-black text-bold"
          />
        </q-list>

      </div>

      <div class="col">
        <div>
          <q-img
            src="statics/logo/automotive-flexibility.png"
            style="max-width: 200px; height: 250px;"
            class="q-pa-lg"
          ></q-img>
        </div>
        <div>Supervised Neural Networks</div>
      </div>

    </div>

    <q-footer elevated>
      <q-toolbar>
        <!-- <q-toolbar-title>Footer</q-toolbar-title> -->

        <div class="row">

          <div class="col">Contact Pratura Incurvo</div>
          <div class="col">Privacy</div>
          <div class="col">Terms of use</div>
          <div class="col">Accessibility</div>

        </div>

      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import DeveloperLink from 'components/DeveloperLink'
import TrendingLink from 'components/TrendingLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
    DeveloperLink,
    TrendingLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Products',
          caption: 'Latest Offerings',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Solutions',
          caption: 'Leading Edge',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Services',
          caption: 'Professional Consultants',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Support',
          caption: 'Available 7x24',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Future Insights',
          caption: 'Future Insights',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        }
      ],
      developerLinks: [
        {
          title: 'Careers',
          caption: 'Job Marketplace',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Redbooks',
          caption: 'Access tech enablement tools',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Support',
          caption: 'Download fixes, get documentation',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Demonstrations',
          caption: 'Browse demos by product or category',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        }
      ],
      trendingLinks: [
        {
          title: 'IBM Developer',
          caption: 'Learn,code, and connect',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Redbooks',
          caption: 'Access tech enablement tools',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Support',
          caption: 'Download fixes, get documentation',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Demonstrations',
          caption: 'Browse demos by product or category',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        }
      ]
    }
  }
}
</script>
