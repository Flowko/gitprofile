<template>
  <section class="charts_section">
    <div class="charts">
      <div v-if="languagesData.labels.length != 0" class="chart">
        <header>
          <h2>Top Languages</h2>
        </header>
        <div class="chart-container">
          <languages-chart
            style="display: block;
                  height: 280px;
    "
            :data="languagesData"
            :options="languagesOptions"
          ></languages-chart>
        </div>
      </div>
      <div v-if="starredData.labels.length != 0" class="chart">
        <header>
          <h2>Most Starred</h2>
        </header>
        <div class="chart-container">
          <starred-chart
            style="display: block;
                  height: 280px;
    "
            :data="starredData"
            :options="starredOptions"
          ></starred-chart>
        </div>
      </div>
      <div v-if="starsLanguagesData.labels.length != 0" class="chart">
        <header>
          <h2>Stars per Language</h2>
        </header>
        <div class="chart-container">
          <stars-languages-chart
            style="display: block;
                  height: 280px;
   "
            :data="starsLanguagesData"
            :options="starsLanguagesOptions"
          ></stars-languages-chart>
        </div>
      </div>
    </div>
    <div class="no-data" v-if="languagesData.labels.length == 0 && starredData.labels.length == 0 && starsLanguagesData.labels.length == 0">
      <h2>Nothing has been made yet</h2>
    </div>
  </section>
</template>

<script>
import LanguagesChart from "./charts/LanguagesChart.js";
import StarredChart from "./charts/StarredChart.js";
import langColors from "./charts/chartColors.js";
import StarsLanguagesChart from "./charts/StarsLanguagesChart.js";

export default {
  name: "RepoCharts",
  components: {
    LanguagesChart,
    StarredChart,
    StarsLanguagesChart
  },
  props: {
    data: Array
  },
  data() {
    return {
      colors: langColors,
      ReposData: null,
      languagesData: {
        labels: [],
        datasets: [
          {
            backgroundColor: [],
            borderColor: [],
            data: [],
            borderWidth: 1
          }
        ]
      },
      languagesOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "right",
          align: "start",
          display: true
        },
        tooltips: {
          cornerRadius: 3
        },
      },
      starredData: {
        labels: [],
        datasets: [
          {
            categoryPercentage: 0.8,
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
              "rgba(75, 192, 192, 0.7)",
              "rgba(153, 102, 255, 0.7)",
              "rgba(255, 159, 64, 0.7)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            data: [],
            borderWidth: 1
          }
        ]
      },
      starredOptions: {
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                stepSize: 0.1,
                maxTicksLimit: 10,
                min: 0,
                max: 1
              }
            }
          ]
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
            borderWidth: 1
          }
        ]
      },
      starsLanguagesOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "right",
          align: "start",
          display: true
        },
        tooltips: {
          cornerRadius: 3
        }
      }
    };
  },
  mounted() {},
  created() {
    if (this.data) {
      //console.log(this.data)
      const reposGroupedByLanguage = this.groupByLanguages(
        this.data,
        "language"
      );
      const reposGroupedByStarredAmount = this.getFirstFiveStarredProjects(
        this.data
      );


      const reposGroupedByStarredLanguages = this.getStasPerLanguages(
        this.data,
        "language"
      );

      // to get all the languages
      for (var language in reposGroupedByLanguage) {
        var languageLeng = reposGroupedByLanguage[language].length;

        if (language != "null") {
          this.languagesData.labels.push(language);
          this.languagesData.datasets[0].data.push(languageLeng);
          
          var colorHex = this.colors[language];
          var colorRgba = this.hexToRgbA(colorHex);

          this.languagesData.datasets[0].backgroundColor.push(colorRgba);
          this.languagesData.datasets[0].borderColor.push(colorRgba);
        }
      }

      // to get all the most starred
      for (var starred in reposGroupedByStarredAmount) {
        var starredCount =
          reposGroupedByStarredAmount[starred].stargazers_count;
        var starredName = reposGroupedByStarredAmount[starred].name;
        //var starredLanguage = reposGroupedByStarredAmount[starred].language;

        this.starredData.labels.push(starredName);
        this.starredData.datasets[0].data.push(starredCount);
        //var colorHex3 = this.colors[starredLanguage];
        //var colorRgba3 = this.hexToRgbA(colorHex3);

        //this.starredData.datasets[0].backgroundColor.push(colorRgba3);
        //this.starredData.datasets[0].borderColor.push(colorRgba3);
      }

      // to get the most starred per language
      for (var starsLanguages in reposGroupedByStarredLanguages) {
        var starsLanguagesLeng =
          reposGroupedByStarredLanguages[starsLanguages].length;

        if (starsLanguages != "null") {
          this.starsLanguagesData.labels.push(starsLanguages);
          this.starsLanguagesData.datasets[0].data.push(starsLanguagesLeng);
          var colorHex2 = this.colors[starsLanguages];
          var colorRgba2 = this.hexToRgbA(colorHex2);

          this.starsLanguagesData.datasets[0].backgroundColor.push(colorRgba2);
          this.starsLanguagesData.datasets[0].borderColor.push(colorRgba2);
        }
      }

      var max_starred_value = Math.max.apply(
        Math,
        this.starredData.datasets[0].data
      );

      this.starredOptions.scales.yAxes[0].ticks.max = max_starred_value;
    }
  },
  methods: {
    groupByLanguages(array, key) {
      return array.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
          currentValue
        );
        return result;
      }, {});
    },
    getFirstFiveStarredProjects(array) {
      var topValues = array
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5);
      return topValues;
    },
    getStasPerLanguages(array, key) {
      var topValues = array.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      );
      return topValues.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
          currentValue
        );
        return result;
      }, {});
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
    }
  }
};
</script>

<style>
.no-data h2{
  color: white;
    text-align: center;
    font-family: Inter;
}
.charts_section {
  padding: 3rem 5rem;
}

.charts_section > div {
  margin: 0px auto;
}

.charts {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  -webkit-box-pack: center;
  justify-content: center;
  max-width: 1200px !important;
  margin-top: -8rem !important;
  gap: 2rem;
}

.charts .chart {
  background-color: rgb(255, 255, 255);
  max-width: 500px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 30px -15px;
  padding: 2rem;
  border-radius: 0.25rem;
}

.charts header {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 2rem;
}

.charts .chart header h2 {
  font-size: 1.5rem;
}

.chart header h2 {
  display: inline-block;
  font-size: 1.75rem;
  color: black;
  background-image: linear-gradient(
    90deg,
    rgb(209, 213, 218) 50%,
    rgba(255, 255, 255, 0) 0px
  );
  background-size: 10px 2px;
  padding-bottom: 6px;
  margin: 0px;
  background-position: center bottom;
  background-repeat: repeat-x;
}

.charts .chart header {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
</style>