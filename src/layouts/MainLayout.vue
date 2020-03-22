<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>

      <q-toolbar>

        <q-img
          src="statics/logo/neonCarnival.png"
          style="width:75px"
          q-item
          clickable
          :to="{name: 'tool'}"
        ></q-img>

        <div class="q-pa-md gt-sm">
          <q-btn-dropdown
            color="primary"
            label="Products"
            q-item
            clickable
            :to="products"
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
            q-item
            clickable
            :to="{name: 'photos'}"
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
            q-item
            clickable
            :to="{name: 'articles'}"
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
            q-item
            clickable
            :to="{name: 'articles'}"
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
            q-item
            clickable
            :to="products"
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
export default {
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
