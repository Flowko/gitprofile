<template>
  <div class="relative px-4 py-5 sm:px-6 -mt-60 lg:px-8">
    <div class="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
      <div class="flex flex-col h-full overflow-hidden rounded-lg shadow-lg">
        <div class="flex flex-col justify-between flex-1 p-6 bg-blueGray-600">
          <profile-charts-LanguagesChart
            class="block"
            :data="languagesData"
            :options="languagesOptions"
            :height="280"
          />
        </div>
      </div>
      <div class="flex flex-col h-full overflow-hidden rounded-lg shadow-lg">
        <div class="flex flex-col justify-between flex-1 p-6 bg-blueGray-600">
          <profile-charts-StarredChart
            class="block"
            :data="starredData"
            :options="starredOptions"
            :height="280"
          />
        </div>
      </div>
      <div class="flex flex-col h-full overflow-hidden rounded-lg shadow-lg">
        <div class="flex flex-col justify-between flex-1 p-6 bg-blueGray-600">
          <profile-charts-StarsLanguagesChart
            class="block"
            :data="starsLanguagesData"
            :options="starsLanguagesOptions"
            :height="280"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import colors from "~/lib/colors.json";
export default {
  props: ["repos"],
  data() {
    return {
      languagesData: {
        labels: [],
        datasets: [
          {
            backgroundColor: [],
            borderColor: [],
            data: [],
            borderWidth: 1,
          },
        ],
      },
      languagesOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "right",
          align: "start",
          display: true,
          labels: {
            fontColor: "#fff",
          },
        },
        tooltips: {
          cornerRadius: 3,
        },
      },
      starredData: {
        labels: [],
        datasets: [
          {
            categoryPercentage: 0.8,
            barPercentage: 0.9,
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
              "rgba(75, 192, 192, 0.7)",
              "rgba(153, 102, 255, 0.7)",
              "rgba(255, 159, 64, 0.7)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            data: [],
            borderWidth: 1,
          },
        ],
      },
      starredOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#fff",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "white",
                stepSize: 0.1,
                maxTicksLimit: 10,
                min: 0,
                max: 1,
              },
            },
          ],
        },
      },
      starsLanguagesData: {
        labels: [],
        datasets: [
          {
            label: "",
            backgroundColor: [],
            borderColor: [],
            data: [],
            borderWidth: 1,
          },
        ],
      },
      starsLanguagesOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "right",
          align: "start",
          display: true,
          labels: {
            fontColor: "#fff",
          },
        },
        tooltips: {
          cornerRadius: 3,
        },
      },
    };
  },
  created() {
    this.languagesChart();
    this.starredChart();
    this.starsChart();
  },
  methods: {
    languagesChart() {
      var languages = this.$_.countBy(this.repos, "language");
      this.languagesData.labels = Object.keys(languages);
      this.languagesData.datasets[0].data = Object.values(languages);
      this.languagesData.datasets[0].backgroundColor = this.$_.map(
        this.languagesData.labels,
        (label) => {
          return colors[label]
            ? this.hexToRgbA(colors[label].color)
            : this.hexToRgbA("#fff");
        }
      );
      this.languagesData.datasets[0].borderColor = this.$_.map(
        this.languagesData.labels,
        (label) => {
          return colors[label]
            ? this.hexToRgbA(colors[label].color)
            : this.hexToRgbA("#fff");
        }
      );
    },
    starredChart() {
      var starred = this.$_.sortBy(this.repos, "stargazers_count")
        .reverse()
        .slice(0, 5);

      this.starredData.labels = this.$_.map(starred, "name");
      this.starredData.datasets[0].data = this.$_.map(
        starred,
        "stargazers_count"
      );
    },
    starsChart() {
      var stars = this.$_.sortBy(this.repos, "stargazers_count").reverse();

      var starsLanguages = this.$_.countBy(stars, "language");
      this.starsLanguagesData.labels = Object.keys(starsLanguages);
      this.starsLanguagesData.datasets[0].data = Object.values(starsLanguages);
      this.starsLanguagesData.datasets[0].backgroundColor = this.$_.map(
        this.starsLanguagesData.labels,
        (label) => {
          return colors[label]
            ? this.hexToRgbA(colors[label].color)
            : this.hexToRgbA("#fff");
        }
      );
      this.starsLanguagesData.datasets[0].borderColor = this.$_.map(
        this.starsLanguagesData.labels,
        (label) => {
          return colors[label]
            ? this.hexToRgbA(colors[label].color)
            : this.hexToRgbA("#fff");
        }
      );
    },
    hexToRgbA(hex) {
      var c;
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split("");
        if (c.length == 3) {
          c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = "0x" + c.join("");
        return (
          "rgba(" +
          [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
          ",0.7)"
        );
      }
      throw new Error("Bad Hex");
    },
  },
};
</script>

<style>
</style>
